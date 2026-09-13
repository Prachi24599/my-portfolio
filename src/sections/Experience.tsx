import Container from '../components/Container'
import './Experience.css'

const experiences = [
  {
    role: 'Software Engineer II',
    company: 'Deloitte USI',
    location: 'Pune, India',
    period: 'Jan 2025 — Present',
    description:
      'Building enterprise web applications and AI-assisted workflows with a strong focus on frontend architecture, responsive interfaces, and user experience.',
    technologies: ['React', 'TypeScript', 'Next.js', 'WebSockets'],
  },
  {
    role: 'Software Developer',
    company: 'HTS',
    location: 'Pune, India',
    period: 'Nov 2023 — Dec 2024',
    description:
      'Developed CRM and workflow applications for real-estate operations, improving lead management, document workflows, and internal productivity.',
    technologies: ['React', 'JavaScript', 'Redux', 'Node.js', 'PostgreSQL'],
  },
  {
    role: 'Project Engineer',
    company: 'Wipro',
    location: 'Pune, India',
    period: 'Jun 2021 — Nov 2023',
    description:
      'Worked on enterprise insurance applications, contributing to frontend development and supporting reliable delivery across an established engineering environment.',
    technologies: ['React', 'Redux', 'Webpack', 'Jenkins', 'AWS'],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience section">
      <Container className="experience__container">
        <div className="experience__heading">
          <p className="experience__label">EXPERIENCE</p>
          <h2>Where I&apos;ve built and shipped software.</h2>
        </div>

        <div className="experience__entries">
          {experiences.map((experience) => (
            <article className="experience__entry" key={`${experience.company}-${experience.role}`}>
              <div className="experience__meta">
                <h3>{experience.role}</h3>
                <p className="experience__company">{experience.company}</p>
                <p className="experience__location">{experience.location}</p>
                <p className="experience__period">{experience.period}</p>
              </div>

              <div className="experience__details">
                <p className="experience__description">{experience.description}</p>
                <ul className="experience__technologies">
                  {experience.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience