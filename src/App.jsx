import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Services from './pages/Services'
import About from './pages/About'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='h-screen w-full bg-gray-400 '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  )
}

export default App