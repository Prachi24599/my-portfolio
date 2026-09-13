import Button from './Button'
import Container from './Container'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <Container className="navbar__container">
        <a className="navbar__brand" href="#top">
          Prachi
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

        <Button>Let's Talk</Button>
      </Container>
    </header>
  )
}

export default Navbar