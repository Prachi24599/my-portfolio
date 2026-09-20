import Container from './Container'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__container">
        <div className="footer__top">
          <div className="footer__identity">
            <p className="footer__name">Prachi Polakhare</p>
            <p className="footer__role">Software Developer</p>
          </div>

          <nav aria-label="Social links">
            <ul className="footer__links">
              <li>
                <a
                  href="https://github.com/Prachi24599"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/prachi-polakhare/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
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