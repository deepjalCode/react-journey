import React from 'react'

const Navbar = (props) => {
 
  
  const changeTheme = ()=>{
    props.setTheme(props.theme=='light'?'dark':'light')
  }

  return (
    <div>
      <p>{props.theme}</p>
      <button 
        onClick={changeTheme}
        className='bg-emerald-500 rounded px-5 py-2'>Change Theme</button>
    </div>
  )
}

export default Navbar