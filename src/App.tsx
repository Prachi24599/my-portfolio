import Navbar from './components/Navbar'
import About from './sections/About'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

function App() {
  return (
    <>
      <Navbar />
      <main className="app">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </>
  )
}

export default App
