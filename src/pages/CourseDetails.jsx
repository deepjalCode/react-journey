import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

  const parms = useParams()
  console.log(parms)

  return (
    <div>
      <h1>{parms.dtId}    Course Details </h1>
    </div>
  )
}

export default CourseDetails