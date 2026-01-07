import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {

  const navigate = useNavigate()

  return (
    <div className='py-2 px-6 bg-gray-600'>
      <button 
        onClick={()=>{
          navigate(-1)
        }}
        className=' bg-emerald-700 px-4 py-1 m-2 cursor-pointer active:scale-95'>Back</button>
      <button 
        onClick={()=>{
          navigate('/')
        }}
        className=' bg-emerald-700 px-4 rounded py-1 m-2 cursor-pointer active:scale-95'>Return to home page</button>
      <button 
        onClick={()=>{
          navigate(+1)
        }}
        className=' bg-emerald-700 px-4 rounded-xl py-1 m-2 cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default Navbar2