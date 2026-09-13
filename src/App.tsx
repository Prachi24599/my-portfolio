import Navbar from './components/Navbar'
import About from './sections/About'
import Hero from './sections/Hero'

function App() {
  return (
    <>
      <Navbar />
      <main className="app">
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
