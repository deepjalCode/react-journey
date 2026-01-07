import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-3 bg-gray-200 items-center'>
      <h2 className='text-xl font-bold'>D Code</h2>
      <div className='flex gap-9 '>
        <Link className='text-lg font-bold' to='/'>Home</Link>
        <Link className='text-lg font-bold' to='/courses'>Courses</Link>
        <Link className='text-lg font-bold' to='/contact'>Contact</Link>
        <Link className='text-lg font-bold' to='/about'>About</Link>
        <Link className='text-lg font-bold' to='/services'>Services</Link>
        
        
      </div>
    </div>
  )
}

export default Navbar