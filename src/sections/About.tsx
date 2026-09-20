import Container from '../components/Container'
import useInView from '../hooks/useInView'
import './About.css'

function About() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className={`about section reveal ${isInView ? 'is-visible' : ''}`}
    >
      <Container className="about__container">
        <div className="about__main">
          <div className={`about__heading reveal reveal-delay-1 ${isInView ? 'is-visible' : ''}`}>
            <p className="about__label">01 -- </p>
            <h2>About Me</h2>
          </div>

          <div className={`about__content reveal reveal-delay-2 ${isInView ? 'is-visible' : ''}`}>
            <p>
              I&apos;m a Full-Stack AI Engineer building modern web applications,
              enterprise products, and AI-powered experiences. With 5+ years of
              experience, I&apos;ve worked across frontend, backend, APIs, real-time
              applications, dashboards, and business workflows.
            </p>
            <p>
              I work with React, TypeScript, Node.js, REST APIs, databases, and
              Generative AI to build scalable, production-ready applications.
            </p>
            <p>
              I care about maintainable code, intuitive experiences, scalability,
              and performance.
            </p>
          </div>

        </div>

        <div className={`about__stats ${isInView ? 'is-visible' : ''}`} aria-label="Career highlights">
          <article className="about__stat-card">
            <strong>5+</strong>
            <span>Years Experience</span>
          </article>
          <article className="about__stat-card">
            <strong>10+</strong>
            <span>Projects Delivered</span>
          </article>
          <article className="about__stat-card">
            <strong>3+</strong>
            <span>AI-Powered Features</span>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default About