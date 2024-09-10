import './App.css'
import About from './assets/components/about/About'
import Contact from './assets/components/contact/Contact'
import Footer from './assets/components/footer/Footer'
import Navbar from './assets/components/navbar/Navbar'
import Projects from './assets/components/projects/Projects'
import Services from './assets/components/services/Services'
import Skills from './assets/components/skills/Skills'
function App() {

  return (
    <>
      <Navbar/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>

  )
}

export default App
