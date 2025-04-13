import React, { useState } from 'react'
import {Link,NavLink, Outlet} from 'react-router-dom'
import '../../Csscomponent/Header.css';
function Header() {
    let [courseText,setCourseText]=useState("")
  return (
    <>
    
    <div className='header'>
        <nav>
            <div className='Hleft'>
              <h3> <img src="/public/Image/background_removed_image_ryQNP8BvSu6YbNDZBfKXiA.png" alt="" />
              |AcademyX</h3> 
                </div>
            <div className='Hmiddle'>
                <ul className='ullist'>
               <li> <NavLink className='navlink' to="courses">Courses</NavLink></li>
               <li> <NavLink className='navlink' to="/">Live</NavLink></li>
               <li><NavLink className='navlink' to="/">Community</NavLink></li>

                </ul>
            </div>
            <div className='Hright'>
              <span> <i class="ri-search-line"></i> <input
               type="text" 
               value={courseText}
               onChange={(e)=>{
                setCourseText(e.target.value)
               }}
               placeholder='Search for courses' 
               /></span>
               
               <NavLink className= {({isActive})=>`${isActive?"text-orange-700":"text-white"}`
            
        } style={{backgroundColor:"aquamarine", width:'70px', textAlign:"center"}} to='/login'>Log in</NavLink>
               <NavLink to='/' className='signup'>Sign up</NavLink>
               
            </div>
        </nav>
    </div>
    
    </>
  )
}

export default Header