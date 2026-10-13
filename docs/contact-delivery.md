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

On 2026-10-13 the local mocked tests passed, but production had no sending key
or sender configuration. No real test email was sent.

## Provider references

- [Send Email API](https://resend.com/docs/api-reference/emails/send-email)
- [Idempotency keys](https://resend.com/docs/dashboard/emails/idempotency-keys)
