import React from 'react'
import CourseSignUp from '../components/CourseSignUp'
import CourseCreater from '../components/CourseCreater'
import Header from '../components/Header'

function Home() {
  return (
    <div>
      <Header/>
      <CourseSignUp/>
      <CourseCreater/>
    </div>
  )
}

export default Home