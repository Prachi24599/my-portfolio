import Container from './Container'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <Container className="navbar__container">
        <a className="navbar__brand" href="#top">
          Prachi.Dev
        </a>

        <nav aria-label="Primary navigation">
          <ul className="navbar__links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <a
          className="button button--primary navbar__resume"
          href="/Prachi_Polakhare_Resume.pdf"
          download="Prachi_Polakhare_Resume.pdf"
        >
          <svg
            className="navbar__resume-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v2h14v-2" />
          </svg>
          Resume
        </a>
      </Container>
    </header>
  )
}

export default Navbar