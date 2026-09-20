import type { FormEvent } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import useInView from '../hooks/useInView'
import './Contact.css'

function Contact() {
  const { ref, isInView } = useInView<HTMLElement>()
  const handleContactClick = () => {
    window.location.href = 'mailto:polakhare.prachi@gmail.com'
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const message = String(formData.get('message') ?? '')
    const subject = `Portfolio inquiry from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

    window.location.href =
      `mailto:polakhare.prachi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
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

        <form className="contact__form reveal reveal-delay-2" onSubmit={handleFormSubmit}>
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

          <Button type="submit">Send Message</Button>
        </form>
      </Container>
    </section>
  )
}

export default Contact