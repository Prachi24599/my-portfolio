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
              I&apos;m a Full-Stack AI Engineer focused on building modern web
              applications, enterprise products, and AI-powered experiences. Over
              the past 5+ years, I&apos;ve worked across frontend and backend
              development, API integration, real-time applications, dashboards,
              business workflows, and AI-driven features.
            </p>
            <p>
              I work across the stack with React, TypeScript, Node.js, REST APIs,
              databases, and Generative AI. I enjoy turning complex requirements
              into scalable applications and integrating AI capabilities into
              intuitive, production-ready user experiences.
            </p>
            <p>
              I care about writing maintainable code, designing scalable
              solutions, creating intuitive experiences, and improving
              application performance and reliability.
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