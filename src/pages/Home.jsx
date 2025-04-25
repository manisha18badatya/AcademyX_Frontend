import React from 'react'
import CourseSignUp from '../components/CourseSignUp'
import CourseCreater from '../components/CourseCreater'
import Navbar from '../components/navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <CourseSignUp/>
      <CourseCreater/>
    </div>
  )
}

export default Home