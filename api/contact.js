import { handleContact } from '../server/contact.js'

const RATE_LIMIT = 5
const RATE_WINDOW_MS = 15 * 60 * 1000
const MAX_TRACKED_IPS = 5000
const requestsByIp = new Map()

function getClientIp(request) {
  const forwardedFor = request.headers?.['x-forwarded-for']
  const firstForwardedIp = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : forwardedFor?.split(',')[0]

  return firstForwardedIp?.trim() || request.socket?.remoteAddress || 'unknown'
}

function checkRateLimit(ip, now) {
  let record = requestsByIp.get(ip)
  let allowed = true

  if (!record || record.resetAt <= now) {
    if (!record && requestsByIp.size >= MAX_TRACKED_IPS) {
      for (const [trackedIp, trackedRecord] of requestsByIp) {
        if (trackedRecord.resetAt <= now) requestsByIp.delete(trackedIp)
      }

      if (requestsByIp.size >= MAX_TRACKED_IPS) {
        const oldestIp = requestsByIp.keys().next().value
        if (oldestIp) requestsByIp.delete(oldestIp)
      }
    }

    record = { count: 1, resetAt: now + RATE_WINDOW_MS }
    requestsByIp.set(ip, record)
  } else if (record.count >= RATE_LIMIT) {
    allowed = false
  } else {
    record.count += 1
  }

  const remaining = Math.max(0, RATE_LIMIT - record.count)
  const resetInSeconds = Math.ceil((record.resetAt - now) / 1000)

  return {
    allowed,
    remaining,
    resetAt: record.resetAt,
    resetInSeconds,
  }
}

export default async function contact(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    response.status(405).json({ error: 'Method not allowed.' })
    return
  }

  const now = Date.now()
  const rateLimit = checkRateLimit(getClientIp(request), now)
  response.setHeader('RateLimit-Policy', `${RATE_LIMIT};w=${RATE_WINDOW_MS / 1000}`)
  response.setHeader(
    'RateLimit',
    `limit=${RATE_LIMIT}, remaining=${rateLimit.remaining}, reset=${rateLimit.resetInSeconds}`,
  )

  if (!rateLimit.allowed) {
    response.setHeader('Retry-After', rateLimit.resetInSeconds)
    response.status(429).json({ error: 'Too many messages. Please try again later.' })
    return
  }

  try {
    const result = await handleContact(request.body)
    response.status(result.status).json(result.body)
  } catch (error) {
    console.error('Unexpected contact API error:', {
      code: error?.code,
      command: error?.command,
    })
    response.status(500).json({ error: 'An unexpected error occurred.' })
  }
}