import Container from '../components/Container'
import useInView from '../hooks/useInView'
import './Skills.css'

const skillGroups = [
  {
    title: 'FRONTEND',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Material UI',
      'Redux',
      'Context API',
    ],
  },
  {
    title: 'BACKEND',
    technologies: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'WebSockets',
      'PostgreSQL',
      'Supabase',
    ],
  },
  {
    title: 'CLOUD & TOOLS',
    technologies: ['AWS', 'Git', 'GitHub', 'Docker', 'Jenkins', 'CI/CD', 'Jira'],
  },
  {
    title: 'TESTING & QUALITY',
    technologies: [
      'Jest',
      'React Testing Library',
      'Code Reviews',
      'Accessibility',
      'Performance Optimization',
    ],
  },
]

function Skills() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="skills"
      ref={ref}
      className={`skills section ${isInView ? 'is-visible' : ''}`}
    >
      <Container className="skills__container">
        <div
          className={`skills__heading reveal reveal-delay-1 ${isInView ? 'is-visible' : ''}`}
        >
          <p className="skills__label">02 -- </p>
          <h2>Skills &amp; Technologies</h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <article
              className={`skills__card reveal reveal-delay-${Math.min(index + 1, 3)} ${isInView ? 'is-visible' : ''}`}
              key={group.title}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
