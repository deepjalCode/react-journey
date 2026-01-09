import React, { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext'

const Nav2 = (props) => {
  
  const theme = useContext(themeDataContext)


  return (
    <div className='flex items-center gap-8'>
      <h4 className='text-lg font-medium '>Home</h4>
      <h4 className='text-lg font-medium '>Product</h4>
      <h4 className='text-lg font-medium '>About</h4>
      <h4 className='text-lg font-medium '>Services</h4>
      <h4 className='text-lg font-medium  rounded bg-amber-500 px-3 py-1'>{theme}</h4>
    </div>
  )
}

export default Nav2