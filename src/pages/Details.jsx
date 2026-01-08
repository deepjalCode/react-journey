import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {

  const parms = useParams()
  

  return (
    <div>
      <h1 className='capitalize'>{parms.id} Product Details</h1>
    </div>
  )
}

export default Details