import Container from '../components/Container'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero section">
      <Container className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow reveal reveal-delay-1 is-visible">
            AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES
          </p>
          <h1 className="reveal reveal-delay-2 is-visible">
            Hi, I&apos;m Prachi — I build <span>fast, scalable web experiences.</span>
          </h1>
          <p className="hero__description reveal reveal-delay-3 is-visible">
            Software Engineer with 5+ years of experience building modern web
            applications using React, TypeScript, Next.js and Node.js. I enjoy
            turning complex business problems into simple, reliable and
            intuitive products.
          </p>
          <p className="hero__location reveal reveal-delay-3 is-visible">
            <svg className="hero__inline-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Berlin, Germany
          </p>
          <div className="hero__actions reveal reveal-delay-3 is-visible">
            <a className="button button--primary" href="#projects">
              View My Work <span className="hero__button-arrow" aria-hidden="true">-&gt;</span>
            </a>
            <a
              className="button button--outline"
              href="/Prachi_Polakhare_Resume.pdf"
              download="Prachi_Polakhare_Resume.pdf"
            >
              <svg className="hero__button-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v2h14v-2" />
              </svg>
              Download Resume
            </a>
          </div>
          <nav className="hero__socials reveal reveal-delay-3 is-visible" aria-label="Social links">
            <a href="https://github.com/Prachi24599" target="_blank" rel="noreferrer">
              <svg className="hero__social-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 19c-4 1.2-4-2-5.5-2.5M14.5 21v-3.2c0-.9.1-1.4-.5-2 2.5-.3 5-1.2 5-5.3a4.1 4.1 0 0 0-1.1-2.8 3.8 3.8 0 0 0-.1-2.8s-1-.3-3.1 1.1a10.7 10.7 0 0 0-5.6 0C7 4.6 6 4.9 6 4.9a3.8 3.8 0 0 0-.1 2.8 4.1 4.1 0 0 0-1.1 2.8c0 4.1 2.5 5 5 5.3-.6.5-.6 1.2-.5 2V21" />
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/prachi-polakhare/" target="_blank" rel="noreferrer">
              <svg className="hero__social-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9v9M6 6v.01M10 18v-5a3 3 0 0 1 6 0v5M10 9v9" />
              </svg>
              LinkedIn
            </a>
            <a href="mailto:polakhare.prachi@gmail.com">
              <svg className="hero__social-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              Email
            </a>
          </nav>
        </div>

        <aside className="hero__code-panel" aria-label="Developer profile preview">
          <div className="hero__code-header">
            <span className="hero__window-dot hero__window-dot--red" />
            <span className="hero__window-dot hero__window-dot--yellow" />
            <span className="hero__window-dot hero__window-dot--green" />
            <span className="hero__code-file">developer.ts</span>
          </div>

          <pre className="hero__code-body">
            <code>
              <span className="hero__code-line"><i>const</i> developer = {'{'}</span>
              <span className="hero__code-line">  name: <b>&apos;Prachi Polakhare&apos;</b>,</span>
              <span className="hero__code-line">  role: <b>&apos;Software Developer&apos;</b>,</span>
              <span className="hero__code-line">  stack: [<b>&apos;React&apos;</b>, <b>&apos;Next.js&apos;</b>, <b>&apos;TS&apos;</b>, <b>&apos;Node&apos;</b>],</span>
              <span className="hero__code-line">  location: <b>&apos;Berlin&apos;</b>,</span>
              <span className="hero__code-line">  available: <em>true</em>,</span>
              <span className="hero__code-line">{'}'}</span>
            </code>
          </pre>

          <div className="hero__code-status">
            <span className="hero__status-dot" />
            available for new opportunities
          </div>
        </aside>
      </Container>
    </section>
  )
}

export default Hero