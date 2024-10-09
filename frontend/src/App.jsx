import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Academy from './pages/Academy'
import Navbar from './components/Navbar'

const App = () => {
  return (

    <div className="inset-0">
     <Navbar />
      <Home />
      <About />
      <Academy />
      <Projects />
      <Contact />

    </div>
 
  )
}

export default App
