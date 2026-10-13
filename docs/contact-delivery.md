# Contact delivery

Production recipient: `support@waterbee.co.kr`.

## Configuration

- `RESEND_API_KEY`: a Resend sending key, stored only in the hosting environment.
- `CONTACT_FROM_EMAIL`: an address on a domain verified in Resend.
- `CONTACT_TO_EMAIL`: `support@waterbee.co.kr`.

Configure production variables in Vercel, then redeploy. Contact pages are
prerendered; the form is enabled at build time only when the key and sender are
configured. Without them the page offers direct email consultation, not a form
that silently loses inquiries. Do not store credentials in Git, Drive backups,
screenshots, or chat.

The server independently validates every submission and only reports success
after the provider accepts it and returns a receipt ID. Receipt acceptance is
not proof of inbox delivery; check the recipient mailbox and provider delivery
status when commissioning the connection.

Customer email is Reply-To only. From/To are server controlled. HTML is escaped.
The honeypot, length limits, UUID idempotency key and double-submit guard reduce
accidental duplicate and simple automated submissions. They are not a complete
abuse prevention system. Apply platform rate limits before a high-volume launch.

## Verification

1. Run `npm run test:contact`, `npm run lint`, and `npm run build`.
2. Confirm both `/ko/contact` and `/en/contact` show the form after configuration.
3. Send one clearly identified internal test inquiry with approved test details.
4. Verify provider acceptance, delivery status, and receipt in the support inbox.
5. Verify Reply-To and that a failed request retains entered values.

## Production commissioning: 2026-10-13

- Resend workspace: `waterbee`, signed in using the company account.
- Verified sending domain: `notify.waterbee.co.kr`, North Virginia (`us-east-1`).
- Sender: `website@notify.waterbee.co.kr`; recipient: `support@waterbee.co.kr`.
- API key: Sending access restricted to this domain, stored as a Vercel
  Production Secret. The key value is not included in source or backups.
- TLS: Enforced. Open/click tracking was not configured. Receiving is disabled.
- DNS: new DKIM TXT and two return-path CNAME records only. Existing root
  Google Workspace MX, SPF, DKIM and DMARC records were preserved.
- Production deployment: `dpl_BJ7Bv45Myk7vCmho2dBhcE9HXGMZ`, source `0fe05c7`.
- Both Korean and English inquiry forms are enabled.
- One approved test, `WB-CONTACT-20261013`, submitted through the public Korean
  form at 13:54 KST. The page showed success and reset the fields.
- Resend receipt `01a1339c-69ea-78af-b6f7-fe610b25d937`: Delivered.
- Gmail message `1a1339c72f68e926`: received in the support inbox, not Spam.
- Received headers: SPF, DKIM and DMARC pass; TLS 1.3; Reply-To correctly
  matches the test sender. Do not resend this commissioning test on resume.
- Mocked contact tests: 16 passed; lint, TypeScript and production build passed.

The initial missing-credentials issue is resolved. Free-plan limits and abuse
controls still need routine operational attention; no paid upgrade was enabled.

## Provider references

- [Send Email API](https://resend.com/docs/api-reference/emails/send-email)
- [Idempotency keys](https://resend.com/docs/dashboard/emails/idempotency-keys)
