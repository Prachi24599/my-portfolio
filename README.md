# My Portfolio

## Contact form email setup

The contact form sends messages through the SMTP backend. Copy `.env.example` to `.env` and set your SMTP credentials there. `MAIL_USER` is the mailbox used to authenticate and send the email; the visitor's address is added as `Reply-To`, so you can reply directly. Their name appears in the subject, and their name, email, and message are included in the body. For Gmail, use a Google App Password (not your account password). Keep `.env` private; it is excluded from Git.

```sh
cp .env.example .env
```

`MAIL_TO` defaults to the portfolio contact email if omitted. The development command starts both the Vite frontend and the API:

```sh
npm install
npm run dev
```

On Vercel, `api/contact.js` handles `POST /api/contact`. Add `MAIL_HOST`, `MAIL_PORT`, `MAIL_USER`, `MAIL_PASS`, and `MAIL_TO` to the project's Environment Variables, then redeploy. The function applies a five-request per 15-minute in-memory limit per client IP on each warm instance. Vercel may run multiple or newly started instances, so this is best-effort protection rather than a globally shared limit; use a shared rate-limit store or Vercel-level protection if a strict global limit is required.

Local development continues to use the Express API, which limits contact submissions to five per IP address every 15 minutes.
