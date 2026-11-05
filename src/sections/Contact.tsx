import { useEffect, useState, type FormEvent } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import useInView from '../hooks/useInView'
import './Contact.css'

function Contact() {
  const { ref, isInView } = useInView<HTMLElement>()
  const [isSending, setIsSending] = useState(false)
  const [toast, setToast] = useState<{
    type: 'success' | 'error'
    message: string
    exiting?: boolean
  } | null>(null)

  useEffect(() => {
    if (!toast) return

    if (toast.exiting) {
      const exitTimeout = window.setTimeout(() => setToast(null), 300)
      return () => window.clearTimeout(exitTimeout)
    }

    const timeout = window.setTimeout(
      () => setToast((current) => (current ? { ...current, exiting: true } : null)),
      1700,
    )
    return () => window.clearTimeout(timeout)
  }, [toast])

  const handleContactClick = () => {
    window.location.href = 'mailto:polakhare.prachi@gmail.com'
  }

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSending) return

    const form = event.currentTarget
    const formData = new FormData(form)
    setIsSending(true)
    setToast(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      })

      if (!response.ok) {
        throw new Error('Unable to send your message. Please try again later.')
      }

      form.reset()
      setToast({ type: 'success', message: 'Message sent successfully' })
    } catch (error) {
      setToast({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Unable to send your message. Please try again later.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      {toast && (
        <div
          className={`contact__toast contact__toast--${toast.type}${toast.exiting ? ' contact__toast--exiting' : ''}`}
          role={toast.type === 'error' ? 'alert' : 'status'}
          aria-live={toast.type === 'error' ? 'assertive' : 'polite'}
        >
          {toast.message}
        </div>
      )}
      <section
        id="contact"
        ref={ref}
        className={`section contact ${isInView ? 'is-visible' : ''}`}
      >
        <Container className="contact__container">
          <div className="contact__content reveal reveal-delay-1">
            <p className="contact__label">05 -- </p>
            <h2>Let&apos;s build something meaningful.</h2>
            <p className="contact__description">
              I&apos;m open to software development opportunities, interesting
              products, and projects where thoughtful engineering can make a real
              impact.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <p className="contact__detail-label">EMAIL</p>
                <a href="mailto:polakhare.prachi@gmail.com">
                  polakhare.prachi@gmail.com
                </a>
              </div>
              <div className="contact__detail">
                <p className="contact__detail-label">AVAILABILITY</p>
                <p>Open to thoughtful products and engineering opportunities.</p>
              </div>
            </div>
            <Button onClick={handleContactClick}>Let&apos;s Talk</Button>
          </div>

          <form
            className="contact__form reveal reveal-delay-2"
            onSubmit={handleFormSubmit}
          >
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />

            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="your@example.com"
              required
            />

            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Tell me about the role or project..."
              required
            />

            <Button type="submit" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Container>
      </section>
    </>
  )
}

export default Contact