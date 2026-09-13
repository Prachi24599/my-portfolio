import Container from '../components/Container'
import './About.css'

function About() {
  return (
    <section id="about" className="about section">
      <Container className="about__container">
        <div className="about__heading">
          <p className="about__label">ABOUT</p>
          <h2>A developer focused on thoughtful, scalable software.</h2>
        </div>

        <div className="about__content">
          <p>
            I&apos;m a software developer with 5 years of experience building
            modern web applications and enterprise experiences. I enjoy
            turning complex requirements into intuitive, reliable interfaces
            that are easy to use and maintain.
          </p>
          <p>
            My primary focus is frontend development with React, TypeScript,
            and Next.js, with experience working across APIs, real-time
            applications, and full-stack product workflows.
          </p>

          <ul className="about__technologies">
            <li>React</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>JavaScript</li>
            <li>REST APIs</li>
            <li>WebSockets</li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default About