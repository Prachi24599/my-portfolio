import Button from '../components/Button'
import Container from '../components/Container'
import './Contact.css'

function Contact() {
  const handleContactClick = () => {
    window.location.href = 'mailto:your.email@example.com'
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
          <Button onClick={handleContactClick}>Let&apos;s Talk</Button>
          <address className="contact__email">
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </address>
        </div>
      </Container>
    </section>
  )
}

export default Contact