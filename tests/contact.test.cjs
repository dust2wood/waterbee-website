const { test, beforeEach, afterEach } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const ts = require('typescript')

require.extensions['.ts'] = (module, filename) => {
  const output = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  })
  module._compile(output.outputText, filename)
}
const { contactSchema, buildContactMessage } = require('../src/lib/contact.ts')
const { sendContactEmail } = require('../src/lib/sendEmail.ts')
const originalFetch = global.fetch
const env = { ...process.env }
const valid = {
  name: 'Website Test', company: 'Waterbee QA', email: 'qa@example.com', phone: '0000000000',
  subject: 'technical', message: 'Automated unit test, no email transmission.',
  consent: true, website: '', requestId: '46717ee0-e191-4941-bfa5-7686b49b3c9b',
}
beforeEach(() => {
  process.env.RESEND_API_KEY = 'unit-test-key'
  process.env.CONTACT_FROM_EMAIL = 'website@example.com'
  process.env.CONTACT_TO_EMAIL = 'support@waterbee.co.kr'
  global.fetch = () => { throw new Error('Unexpected network request') }
})
afterEach(() => {
  global.fetch = originalFetch
  for (const name of ['RESEND_API_KEY', 'CONTACT_FROM_EMAIL', 'CONTACT_TO_EMAIL']) {
    if (env[name] === undefined) delete process.env[name]
    else process.env[name] = env[name]
  }
})

test('valid bilingual inquiry and trimmed input', () => {
  assert.equal(contactSchema.parse({ ...valid, name: '  홍길동  ' }).name, '홍길동')
})
for (const [name, override] of [
  ['missing consent', { consent: false }], ['honeypot', { website: 'spam' }],
  ['unknown subject', { subject: 'inject' }], ['invalid email', { email: 'bad' }],
  ['oversized message', { message: 'x'.repeat(5001) }], ['empty name', { name: '  ' }],
  ['header injection', { name: 'test\r\nBCC:test@example.com' }], ['invalid request ID', { requestId: 'x' }],
]) test(`reject ${name} before sending`, async () => {
  assert.deepEqual(await sendContactEmail({ ...valid, ...override }), { success: false, error: 'validation' })
})
test('escape all HTML fields while retaining plain text', () => {
  const output = buildContactMessage({ ...valid, message: '<img src=x onerror="alert(1)"> & test' })
  assert.ok(!output.html.includes('<img'))
  assert.ok(output.html.includes('&lt;img'))
  assert.ok(output.html.includes('&amp;'))
  assert.ok(output.text.includes('<img'))
})
test('missing key fails honestly without network request', async () => {
  delete process.env.RESEND_API_KEY
  assert.deepEqual(await sendContactEmail(valid), { success: false, error: 'unavailable' })
})
test('missing verified sender fails honestly', async () => {
  delete process.env.CONTACT_FROM_EMAIL
  assert.deepEqual(await sendContactEmail(valid), { success: false, error: 'unavailable' })
})
test('successful provider receipt with fixed recipient, reply-to and stable idempotency', async () => {
  let calls = 0
  global.fetch = async (url, options) => {
    calls++
    assert.equal(url, 'https://api.resend.com/emails')
    assert.equal(options.headers['Idempotency-Key'], `contact/${valid.requestId}`)
    const body = JSON.parse(options.body)
    assert.deepEqual(body.to, ['support@waterbee.co.kr'])
    assert.equal(body.reply_to, valid.email)
    assert.ok(body.subject.includes('기술 지원'))
    assert.equal(body.website, undefined)
    assert.ok(body.text && body.html)
    return Response.json({ id: 'mock-receipt' })
  }
  assert.deepEqual(await sendContactEmail(valid), { success: true })
  assert.deepEqual(await sendContactEmail(valid), { success: true })
  assert.equal(calls, 2)
})
test('provider rejection is not a success', async () => {
  global.fetch = async () => Response.json({ message: 'Rejected' }, { status: 403 })
  assert.deepEqual(await sendContactEmail(valid), { success: false, error: 'delivery' })
})
test('malformed provider receipt is not a success', async () => {
  global.fetch = async () => Response.json({})
  assert.deepEqual(await sendContactEmail(valid), { success: false, error: 'delivery' })
})
test('network failure preserves failure state', async () => {
  global.fetch = async () => { throw new Error('Network unavailable') }
  assert.deepEqual(await sendContactEmail(valid), { success: false, error: 'delivery' })
})
