import { useEffect, useState } from 'react'
import Container from './Container'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const sections = ['top', 'about', 'skills', 'experience', 'contact']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top,
          )[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

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
              <a
                className={activeSection === 'top' ? 'navbar__link--active' : ''}
                href="#top"
                aria-current={activeSection === 'top' ? 'page' : undefined}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={activeSection === 'about' ? 'navbar__link--active' : ''}
                href="#about"
                aria-current={activeSection === 'about' ? 'page' : undefined}
              >
                About
              </a>
            </li>
            <li>
              <a
                className={activeSection === 'skills' ? 'navbar__link--active' : ''}
                href="#skills"
                aria-current={activeSection === 'skills' ? 'page' : undefined}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className={activeSection === 'experience' ? 'navbar__link--active' : ''}
                href="#experience"
                aria-current={activeSection === 'experience' ? 'page' : undefined}
              >
                Experience
              </a>
            </li>
            {/* <li>
              <a href="#projects">Projects</a>
            </li> */}
            <li>
              <a
                className={activeSection === 'contact' ? 'navbar__link--active' : ''}
                href="#contact"
                aria-current={activeSection === 'contact' ? 'page' : undefined}
              >
                Contact
              </a>
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
        <a
          className={activeSection === 'top' ? 'navbar__link--active' : ''}
          href="#top"
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          className={activeSection === 'about' ? 'navbar__link--active' : ''}
          href="#about"
          onClick={closeMenu}
        >
          About
        </a>
        <a
          className={activeSection === 'skills' ? 'navbar__link--active' : ''}
          href="#skills"
          onClick={closeMenu}
        >
          Skills
        </a>
        <a
          className={activeSection === 'experience' ? 'navbar__link--active' : ''}
          href="#experience"
          onClick={closeMenu}
        >
          Experience
        </a>
        {/* <a href="#projects" onClick={closeMenu}>
          Projects
        </a> */}
        <a
          className={activeSection === 'contact' ? 'navbar__link--active' : ''}
          href="#contact"
          onClick={closeMenu}
        >
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