import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  )
}

export default App