import Container from '../components/Container'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero section">
      <Container className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">SOFTWARE DEVELOPER</p>
          <h1>Building thoughtful digital experiences.</h1>
          <p className="hero__description">
            I&apos;m a software developer focused on building modern, scalable
            web applications with React, TypeScript, and Next.js.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              View Projects
            </a>
            <a className="button button--outline" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero