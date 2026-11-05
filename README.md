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

For deployment, run `npm run build` for the frontend and `npm run start:server` for the API. Configure the deployment platform to route `/api` requests to the API server, and provide the same `MAIL_*` environment variables through its secret settings.

The API limits contact submissions to five per IP address every 15 minutes.
