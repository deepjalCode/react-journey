import React, { useContext } from 'react'
import Nav2 from './Nav2'


const Navbar = (props) => {



  return (
    <div className='flex items-center justify-between px-8 py-4 bg-emerald-400'>
      <h2 className=' text-xl font-bold capitalize'>DeepxCode </h2>
      <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar