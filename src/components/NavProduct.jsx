import React from 'react'
import { Link } from 'react-router-dom'

const NavProduct = () => {
  return (
    <div className='flex items-center justify-center gap-7 px-3 py-3'>
      <Link className='text-xl text-amber-400 underline font-medium' to='/product/new'>Newest</Link>
      <Link className='text-xl text-amber-400 underline font-medium' to='/product/trend'>Trending</Link>
      <Link className='text-xl text-amber-400 underline font-medium' to='/product/old' >Oldest</Link>
    </div>
  )
}

export default NavProduct