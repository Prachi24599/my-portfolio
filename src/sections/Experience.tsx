import Container from '../components/Container'
import useInView from '../hooks/useInView'
import './Experience.css'

const experiences = [
  {
    role: 'Software Engineer II',
    company: 'Deloitte USI',
    location: 'Pune',
    period: '2025 — Present',
    description:
      'Building enterprise applications using React, TypeScript and modern web technologies. Working on data visualization, AI-assisted workflows, real-time interfaces and document-processing applications.',
  },
  {
    role: 'Software Developer',
    company: 'HTS',
    location: 'Pune, India',
    period: '2023 — 2024',
    description:
      'Developed customer-facing and internal business applications for real-estate workflows.',
  },
  {
    role: 'Project Engineer',
    company: 'Wipro',
    location: 'Pune, India',
    period: '2021 — 2023',
    description:
      'Worked on enterprise applications in the insurance domain, contributing to application support, frontend development and engineering workflows.',
  },
]

function ExperienceEntry({
  experience,
  index,
}: {
  experience: (typeof experiences)[number]
  index: number
}) {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <article
      ref={ref}
      className={`experience__entry reveal reveal-delay-${Math.min(index + 1, 3)} ${isInView ? 'is-visible' : ''}`}
    >
        <div className="experience__card">
          <p className="experience__period">{experience.period}</p>
          <h3>{experience.role}</h3>
          <p className="experience__company">
            {experience.company} · {experience.location}
          </p>
          <p className="experience__description">{experience.description}</p>
        </div>
    </article>
  )
}

function Experience() {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <section id="experience" className="experience section">
      <Container className="experience__container">
        <div className="experience__heading">
          <p className="experience__label">03 -- </p>
          <h2>Experience</h2>
        </div>

        <div ref={ref} className={`experience__entries ${isInView ? 'is-visible' : ''}`}>
          {experiences.map((experience, index) => (
            <ExperienceEntry
              key={`${experience.company}-${experience.role}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience