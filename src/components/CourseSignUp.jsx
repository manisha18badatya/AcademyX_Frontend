

import React, { useState } from 'react'
import '../Stylesheets/Coursesignup.css';
function CourseSignUp() {
    let [signup,setSignUp]=useState("")
  return (
    <div>
        <div className='signuppage'>
            <div className='signuppagecontent'>
            <h1>X-FACTOR IN <br />LEARNING</h1>
            <h1>QUALITY EDUCATION ONLINE</h1>
           <button>sign up for free</button>
        </div>
        </div>
    </div>
  )
}

export default CourseSignUp