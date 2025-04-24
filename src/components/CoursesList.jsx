import React from 'react'
import '../Stylesheets/CoursesList.css'
import { useState,useEffect } from 'react';
export default function CoursesList() { 
  let [card,setCard]=useState([])

      useEffect(()=>{
        let cardValue=[
          {img:"/Image/Ai portrait Disney style - Dall-E 3.jpg",
          name:"Rahul Sinha",
          course:"Machine Learning"
          },
          {img:"/public/Image/download (48).jpg",
          name:"prof.David Hefner",
          course:"Data Science"
          },
          {img:"/public/Image/3D Cartoon Avatar of a Woman Minimal 3D Character _ Premium AI-generated image.jpg",
          name:"Prof.Kelly Mcawth",
          course:"Mathematics"
          }
        ];
      setCard(cardValue)
    },[])
      return (
        <>
        <div className='course-list'>
         
          <div>
              {card.length>0?(
                card.map((value,idx)=>(
                  <TopCourseCard
                  key={idx}
                  image={value.img}
                  tittle={value.name}
                  course={value.course}
                  />
    
                ))
    
              ):(
                <p>Loadind......</p>
              )}
          </div>
        </div>
        </>
      )
    }
    
    function TopCourseCard({image,tittle,course}){
      return (
          <>
          <div className='course-card'>
         <div className="course-img">

          <img src={image} alt={tittle} className="" 
          
          > 
          </img>
          <div className="data-set">
            <h3 className="text-lg font-semibold">{tittle}</h3>
            <p className="text-lg">{course}</p>
          </div>
        </div>
        </div>
        </>  
      
    )
    }



