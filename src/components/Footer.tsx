import Container from './Container'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__container">
        <div className="footer__top">
          <div className="footer__identity">
            <p className="footer__name">Prachi Polakhare</p>
            <p className="footer__role">React · TypeScript · Next.js</p>
          </div>

          <nav className="footer__navigation" aria-label="Footer navigation">
            <ul className="footer__links">
              <li><a href="#top">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              {/* <li><a href="#projects">Projects</a></li> */}
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <nav className="footer__socials" aria-label="Social links">
            <ul className="footer__links">
              <li>
                <a
                  href="https://github.com/Prachi24599"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4 1.2-4-2-5.5-2.5M14.5 21v-3.2c0-.9.1-1.4-.5-2 2.5-.3 5-1.2 5-5.3a4.1 4.1 0 0 0-1.1-2.8 3.8 3.8 0 0 0-.1-2.8s-1-.3-3.1 1.1a10.7 10.7 0 0 0-5.6 0C7 4.6 6 4.9 6 4.9a3.8 3.8 0 0 0-.1 2.8 4.1 4.1 0 0 0-1.1 2.8c0 4.1 2.5 5 5 5.3-.6.5-.6 1.2-.5 2V21" /></svg>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/prachi-polakhare/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9v9M6 6v.01M10 18v-5a3 3 0 0 1 6 0v5M10 9v9" /></svg>
                </a>
              </li>
              <li>
                <a href="mailto:polakhare.prachi@gmail.com" aria-label="Email">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <small className="footer__copyright">
          © 2026 Prachi Polakhare. All rights reserved.
        </small>
      </Container>
    </footer>
  )
}

export default Footer