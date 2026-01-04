import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-gray-200 px-7 py-4 flex items-center justify-between '>
        <h2 className='text-3xl font-bold '>DepxCode</h2>
        <div className='flex items-center gap-22 text-gray-950 text-xl bg-gray-400 font-medium px-7 py-4 rounded-4xl shadow-black '>
          <Link to='/'>Home</Link>
          <Link to='/product'>Product</Link>
          <Link to='/services'>Services</Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
  )
}

export default Navbar