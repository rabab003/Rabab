import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact"

const App = () => {
  return (
    <main className='mx-auto overflow-x-hidden antialiased max-w-7xl'>
    <div className='fixed inset-0 bg-fixed bg-center bg-cover bg-image'></div>
    <div className='relative z-10'>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>

    </div>

    </main>
  )
}

export default App
