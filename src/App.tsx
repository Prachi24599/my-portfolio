import Navbar from './components/Navbar'
import About from './sections/About'
import Experience from './sections/Experience'
import Hero from './sections/Hero'

function App() {
  return (
    <>
      <Navbar />
      <main className="app">
        <Hero />
        <About />
        <Experience />
      </main>
    </>
  )
}

export default App
