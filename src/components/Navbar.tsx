import { useState } from 'react'
import Container from './Container'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar">
      <Container className="navbar__container">
        <a className="navbar__brand" href="#top">
          Prachi.dev
        </a>

        <nav className="navbar__desktop-nav" aria-label="Primary navigation">
          <ul className="navbar__links">
            <li>
              <a className="navbar__link--active" href="#top" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
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

        <button
          className="navbar__menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </Container>

      <nav
        id="mobile-navigation"
        className={`navbar__mobile-nav ${isMenuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
      >
        <a className="navbar__link--active" href="#top" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
        <a href="mailto:polakhare.prachi@gmail.com" onClick={closeMenu}>
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  )
}

export default Navbar