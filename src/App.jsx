import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Services from './pages/Services'
import Product from './pages/Product'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import New from './pages/New'
import Oldest from './pages/Oldest'
import Trend from './pages/Trend'
import Details from './pages/Details'

const App = () => {

  return (
    <div className='h-screen w-full bg-emerald-700'>
      <Navbar />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}>
          <Route path='/product/new' element={<New />} />
          <Route path='/product/old' element={<Oldest />} />
          <Route path='/product/trend' element={<Trend />} />
        </Route>
        <Route path='/product/:id' element={<Details />} />
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    
      
    </div>
    
  )
}

export default App