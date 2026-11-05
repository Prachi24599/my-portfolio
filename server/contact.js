import nodemailer from 'nodemailer'

const defaultRecipient = 'polakhare.prachi@gmail.com'

export async function handleContact(body) {
  const { name, email, message } = body ?? {}

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
    return {
      status: 400,
      body: { error: 'Please provide a valid name, email, and message.' },
    }
  }

  const { MAIL_HOST, MAIL_USER, MAIL_PASS } = process.env
  const mailPort = Number(process.env.MAIL_PORT || 587)

  if (
    !MAIL_HOST ||
    !MAIL_USER ||
    !MAIL_PASS ||
    !Number.isInteger(mailPort) ||
    mailPort < 1 ||
    mailPort > 65535
  ) {
    return { status: 503, body: { error: 'Email delivery is not configured.' } }
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

    return { status: 200, body: { message: 'Message sent successfully.' } }
  } catch (error) {
    console.error('Failed to send contact email:', {
      code: error?.code,
      command: error?.command,
    })
    return {
      status: 502,
      body: { error: 'Unable to send your message. Please try again later.' },
    }
  }
}
