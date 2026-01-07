import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Services = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-12 py-3 px-6'>
        <Link to='/services/men' className='text-white text-2xl' >Mens</Link>
        <Link to='/services/women'  className='text-white text-2xl'>Womens</Link>
        <Link to='/services/kid'className='text-white text-2xl'>Kids</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Services