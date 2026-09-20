import Container from '../components/Container'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero section">
      <Container className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow reveal reveal-delay-1 is-visible">
            SOFTWARE DEVELOPER
          </p>
          <h1 className="reveal reveal-delay-2 is-visible">
            Building thoughtful digital experiences.
          </h1>
          <p className="hero__description reveal reveal-delay-3 is-visible">
            I&apos;m a software developer focused on building modern, scalable
            web applications with React, TypeScript, and Next.js.
          </p>
          <div className="hero__actions reveal reveal-delay-3 is-visible">
            <a className="button button--primary" href="#projects">
              View Projects <span className="hero__button-arrow" aria-hidden="true">-&gt;</span>
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