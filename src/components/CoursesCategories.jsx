import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Stylesheets/CourseCategories.css';
function CoursesCategories() {
  return (
    <div className='mainCourses'>
        <div className='coursesleft'>
            <h1 >Courses</h1>
            <h2>categories</h2>
            <ul>
            <li>
          <NavLink >
           Illustration Craft
          </NavLink>
            </li>
            <li>
          <NavLink >
            Marketing & Business
          </NavLink>
            </li>
            <li>
          <NavLink >
           Photography &video
          </NavLink>
            </li>
            <li>
          <NavLink >
            Design
          </NavLink>
            </li>
            <li>
          <NavLink >
           3D Animation
          </NavLink>
            </li>
            <li>
          <NavLink >
            UI/UX Design
          </NavLink>
            </li>
            <li>
          <NavLink >
            Architecture & Spaces
          </NavLink>
            </li>
            <li>
          <NavLink >
            Wrtting
          </NavLink>
            </li>
            <li>
          <NavLink >
            Fashon
          </NavLink>
            </li>
            <li>
          <NavLink >
            Web and App Design
          </NavLink>
            </li>
            <li>
          <NavLink >
            Calligraphy & Typography
          </NavLink>
            </li>
            <li>
          <NavLink >
            Music &Audio
          </NavLink>
            </li>
            <li>
          <NavLink >
            Culinary
          </NavLink>
            </li>
            <li>
          <NavLink >
            Artificial Intelligence
          </NavLink>
            </li>
            <li>
          <NavLink >
            Wellness
          </NavLink>
            </li>
            <li>
          <NavLink >
            How to become
          </NavLink>
            </li>
            <li>
          <NavLink >
            Logo Design 
          </NavLink>
            </li>
            <li>
          <NavLink >
            Programming
          </NavLink>
            </li>
            <li>
          <NavLink >
            Web DEvelopment
          </NavLink>
            </li>
            <li>
          <NavLink >
            Data Analysis
          </NavLink>
            </li>
          </ul>
        </div>
        <div className='coursesright'>
        <div className='headline'>
                    <img src="/public/Image/background_removed_image_ryQNP8BvSu6YbNDZBfKXiA.png" alt="" />
                    <h2 >Course <i class="ri-arrow-right-wide-line"></i> ui/ux Design <i class="ri-arrow-right-wide-line"></i>Figma complete guide</h2>
            </div>
         <div className='menu-course'>
            <h2><i class="ri-filter-line"></i>Filter</h2>
            <h2>Sort<i class="ri-menu-line"></i></h2>
          </div>  
          <div className='List-vedo'>
            
            </div> 
        </div>
    </div>
  )
}

export default CoursesCategories