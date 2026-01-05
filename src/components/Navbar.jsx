import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-3 bg-gray-200 items-center'>
      <h2 className='text-xl font-bold'>D Code</h2>
      <div className='flex gap-9 '>
        <a className='text-lg font-bold' href="/">Home</a>
        <a className='text-lg font-bold' href="/contact">Contact</a>
        <a className='text-lg font-bold' href="/about">About</a>
        <a className='text-lg font-bold' href="/services">Services</a>

      </div>
    </div>
  )
}

export default Navbar