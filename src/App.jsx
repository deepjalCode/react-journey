import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme]=useState('light')

  return (
    <div className='h-screen w-full bg-emerald-950'>
      <Navbar theme={theme}/>
    </div>
  )
}

export default App