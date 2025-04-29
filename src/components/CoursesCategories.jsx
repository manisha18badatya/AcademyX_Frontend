import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Stylesheets/CourseCategories.css';


function CoursesCategories() {

  const [courses,setCourses] = useState([])
  const courseFetch = async()=>{
    const url = "http://localhost:8080/api/v1/courses/allCourses"
    const response = await fetch(url)
    const courseData = await response.json()
    
    setCourses(courseData)
  }

  useEffect(()=>{
    courseFetch()
  },[])
  return (
    <div className='mainCourses'>
        <div className='coursesleft'>
            <h1 >Courses</h1>
            <h2>categories</h2>
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