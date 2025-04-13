import React, { useEffect, useState } from 'react'
import '../../Csscomponent/CourseCreater.css';
export default function CourseCreater() {
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
    <div className='courseCreators'>
    
      <h1>Our Top Creators</h1>
     
      <div>
          {card.length>0?(
            card.map((value,idx)=>(
              <CourseCard
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

function CourseCard({image,tittle,course}){
  return (
      <>
      <div className='card_container'>
     <div className="cardset">
      <img src={image} alt={tittle} className="cardimg" />
      <div className="data">
        <h3 className="text-lg font-semibold">{tittle}</h3>
        <p className="text-sm">{course}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem molestias harum blanditiis vel exercitationem, dolore rem ex recusandae optio?</p>
      </div>
    </div>
    </div>
    </>  
  
)
}