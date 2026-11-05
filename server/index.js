import 'dotenv/config'
import express from 'express'
import rateLimit from 'express-rate-limit'
import { handleContact } from './contact.js'

const app = express()
const port = Number(process.env.API_PORT || 3001)

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
    const result = await handleContact(request.body)
    response.status(result.status).json(result.body)
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
