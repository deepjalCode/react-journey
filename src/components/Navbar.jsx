import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-emerald-200 items-center justify-between px-8 py-4'>
      <h2 className='font-bold text-2xl underline'>DCode</h2>
      <div className='flex items-center gap-8'>
        <Link className='textr-xl font-medium ' to='/'>Home</Link>
        <Link className='textr-xl font-medium ' to='/product'>Product</Link>
        <Link className='textr-xl font-medium ' to='/services'>Services</Link>
        <Link className='textr-xl font-medium ' to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar