import React from 'react'
import NavProduct from '../components/NavProduct'
import { Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <NavProduct />
      <Outlet />
    </div>
  )
}

export default Product