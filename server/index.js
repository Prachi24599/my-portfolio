import 'dotenv/config'
import express from 'express'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'

const app = express()
const port = Number(process.env.API_PORT || 3001)
const defaultRecipient = 'polakhare.prachi@gmail.com'

app.use(express.json({ limit: '10kb' }))

app.post(
  '/api/contact',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (_request, response) => {
      response.status(429).json({ error: 'Too many messages. Please try again later.' })
    },
  }),
  async (request, response) => {
    const { name, email, message } = request.body ?? {}

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      !message.trim() ||
      name.trim().length > 100 ||
      email.trim().length > 254 ||
      message.trim().length > 5000
    ) {
      response.status(400).json({ error: 'Please provide a valid name, email, and message.' })
      return
    }

    const { MAIL_HOST, MAIL_USER, MAIL_PASS } = process.env
    const mailPort = Number(process.env.MAIL_PORT || 587)

    if (!MAIL_HOST || !MAIL_USER || !MAIL_PASS || !Number.isInteger(mailPort)) {
      response.status(503).json({ error: 'Email delivery is not configured.' })
      return
    }

    try {
      const transporter = nodemailer.createTransport({
        host: MAIL_HOST,
        port: mailPort,
        secure: mailPort === 465,
        auth: { user: MAIL_USER, pass: MAIL_PASS },
      })

      await transporter.sendMail({
        from: MAIL_USER,
        to: process.env.MAIL_TO || defaultRecipient,
        replyTo: email.trim(),
        subject: `Portfolio message from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
      })

      response.status(200).json({ message: 'Message sent successfully.' })
    } catch (error) {
      console.error('Failed to send contact email:', error)
      response.status(502).json({ error: 'Unable to send your message. Please try again later.' })
    }
  },
)

app.use((error, _request, response, _next) => {
  if (error instanceof SyntaxError) {
    response.status(400).json({ error: 'Invalid request body.' })
    return
  }

  console.error('Unexpected API error:', error)
  response.status(500).json({ error: 'An unexpected error occurred.' })
})

app.listen(port, () => {
  console.log(`Contact API listening on port ${port}`)
})
