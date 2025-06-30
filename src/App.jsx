

import './App.css'
import About from './pages/About/About'
import Button from './pages/Componenets/Button'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'

import Home from './pages/Home/Home'
import Skills from './pages/Skills/Skills'
import Work from './pages/Work/Work'

function App() {


  return (
    <div className='max-w-full mx-6'>
      <Home/>
    <Skills/>
    <About/>
    <Work/>
    <Contact/>
    <Footer/>
    
    <Button/>
    </div>
  )
}

export default App
