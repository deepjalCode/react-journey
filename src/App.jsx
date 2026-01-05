import React from 'react'
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
import Home from './pages/Home'
import Services from './pages/Services'
import { Route,Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import UnexpectedPage from './pages/UnexpectedPage'

const App = () => {
  return (
    <div className='bg-gray-950  h-screen w-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='*' element={<UnexpectedPage />} />
      </Routes>
      <Fotter />
    </div>
  )
}

export default App