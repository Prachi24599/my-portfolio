import type { FormEvent } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import './Contact.css'

function Contact() {
  const handleContactClick = () => {
    window.location.href = 'mailto:your.email@example.com'
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="contact" className="section contact">
      <Container className="contact__container">
        <div className="contact__content">
          <p className="contact__label">CONTACT</p>
          <h2>Let&apos;s build something meaningful.</h2>
          <p className="contact__description">
            I&apos;m open to software development opportunities, interesting
            products, and projects where thoughtful engineering can make a real
            impact.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <p className="contact__detail-label">EMAIL</p>
              <a href="mailto:your.email@example.com">
                your.email@example.com
              </a>
            </div>
            <div className="contact__detail">
              <p className="contact__detail-label">AVAILABILITY</p>
              <p>Open to thoughtful products and engineering opportunities.</p>
            </div>
          </div>
          <Button onClick={handleContactClick}>Let&apos;s Talk</Button>
        </div>

        <form className="contact__form" onSubmit={handleFormSubmit}>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" placeholder="Your name" />

          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="your@example.com"
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell me about the role or project..."
          />

          <Button type="submit">Send Message</Button>
        </form>
      </Container>
    </section>
  )
}

export default Contact