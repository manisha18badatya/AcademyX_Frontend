import React, { useEffect, useState } from 'react'
import '../../Stylesheets/TopCreator.css';
export default function TopCreators() {
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
    <div className='Topcreator'>
    
      <h1 className='Topcreator__subtitle'>Our Top Creators</h1>
     
      <div className='cards-grid'>
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
      <img src={image} alt={tittle} className="cardset__img" />
      <div className="data">
        <h3 className="cardset__title">{tittle}</h3>
        <p className="cardset__subtitle">{course}</p>
        <p className='cardset__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem </p>
      </div>
    </div>
    </div>
    </>  
  
)
}