import React from 'react'
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
import Home from './pages/Home'
import Services from './pages/Services'
import { Route,Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import UnexpectedPage from './pages/UnexpectedPage'
import Men from './pages/Men'
import Women from './pages/Women'
import Kid from './pages/Kid'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Navbar2 from './pages/Navbar2'


const App = () => {
  return (
    <div className='bg-gray-950  h-screen w-full'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses/:dtId' element={<CourseDetails />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='Kid' element={<Kid />} />
        </Route>
        <Route path='*' element={<UnexpectedPage />} />
        
      </Routes>
      <Fotter />
    </div>
  )
}

export default App