import Container from '../components/Container'
import './Projects.css'

const projects = [
  {
    title: 'Supply Chain Knowledge Graph',
    description:
      'An interactive enterprise application for exploring and manipulating supply-chain relationships across a large knowledge graph.',
    technologies: ['React', 'TypeScript', 'Neo4j', 'Cypher', 'WebSockets'],
    cta: 'View project',
  },
  {
    title: 'Submission Intake',
    description:
      'A workflow interface for uploading, previewing, analyzing, and managing insurance submission documents and extracted attributes.',
    technologies: ['React', 'TypeScript', 'MUI', 'REST APIs'],
    cta: 'View project',
  },
  {
    title: 'Auto Advisor',
    description:
      'An interactive insurance assistant interface supporting text and voice-based interactions with real-time responses.',
    technologies: ['React', 'TypeScript', 'WebSockets', 'AI'],
    cta: 'View project',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects section">
      <Container className="projects__container">
        <div className="projects__heading">
          <p className="projects__label">PROJECTS</p>
          <h2>Selected work and products I&apos;ve helped build.</h2>
        </div>

        <div className="projects__list">
          {projects.map((project) => (
            <article className="projects__project" key={project.title}>
              <div className="projects__meta">
                <h3>{project.title}</h3>
              </div>

              <div className="projects__details">
                <p className="projects__description">{project.description}</p>
                <ul className="projects__technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <a
                  className="projects__link"
                  href="#contact"
                  aria-label={`${project.cta} for ${project.title}`}
                >
                  {project.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects