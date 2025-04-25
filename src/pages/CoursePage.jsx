import React, { useEffect, useState } from 'react'
import '../Stylesheets/CoursePage.css'
import CourseContent from '../components/CourseContent'
import CoursesList from '../components/CoursesList'
import { useParams } from 'react-router-dom'

function CoursePage() {
 let [list,setList]=useState(['Lorem Ipsum Dolo','sit Amet,Consectetu', 'R Adispiscing Elit,ed D','O Eiusmod Tempor','Incididunt Ut Ladore Et','Dolore Magna Aliqua','ut Enim Ad Minum Veniam','Quis Nostrud Execitation Ullamco Laboris','Nisi Ut Aliquio Ex Ea Commondo Consequant','Aute Irure Dolor In','Reprehenderit In'])
 const [courseData,setCourseData] = useState("")

        const{id} = useParams()
        const courseDetails = async ()=>{
                const url = `https://academyx-backend.onrender.com/api/v1/courses/${id}`
                const response = await fetch(url)
                const responseData = await response.json()
                console.log(responseData)
                setCourseData(responseData)
        }
        useEffect(()=>{
                courseDetails()
        },[])
        if (!courseData) return <h2>Loading...</h2>;
return (
<>
    <div className='course-page'>
            <div className='headline'>
                    <img src="/public/Image/background_removed_image_ryQNP8BvSu6YbNDZBfKXiA.png" alt="" />
                    <h2 >Course <i class="ri-arrow-right-wide-line"></i> {courseData.data.category} <i class="ri-arrow-right-wide-line"></i>Figma complete guide</h2>
            </div>
            <div className='mid-page'>
                 <div className='mid-left'>
                 <div className='tittle'>
                <h2 >  {courseData.data.courseName}</h2>
                <h3 >Created by <i class="ri-arrow-left-s-line"></i>{courseData.data.educator.username}<i class="ri-arrow-right-s-line"></i></h3>
            </div>
                     <div className='mid-page-bg object-contain overflow-hidden'> 
                            <div className='overlay'>
                                    <div className='overlay-content'>
                                 
                            <span> <img className='h-60 w-2xl object-contain' src={courseData.data.thumbnail} alt="img" />
                            {/* <h1 >FIGMA</h1> */}
                            </span>
                            {/* <h2 >Only design tool you need </h2>       */}
                     </div>
                        </div>
                        </div>
                            <div className='descripton my-10'>
                                    <h2 >Description</h2>
                                    <p>{courseData.data?.description}</p>
                                    
                            </div>

                    </div>
                    <div className='mid-right'>
                            <div className='mid-right-content'>
                                    <h2 >Price</h2>
                                    {/* <div className='price'>
                                    <h3 > <i class="fa-solid fa-indian-rupee-sign"></i>15000</h3>
                                    <button>Special offer</button>
                                    </div> */}
                                    {/* <h3 >
                                     <span>70%</span> Discount</h3> */}

                                 <div className='cur-price'>
                                    <h1 ><i class="fa-solid fa-indian-rupee-sign"></i>{courseData.data.price}</h1>
                                    <button>BUY NOW</button>
                                    
                                 </div>
                            </div>
                    <h2 className="font-bold"style={{marginTop:'20px' ,marginBottom:'10px'}}>WHAT YOU'LL GET</h2>
                    <div className='list'>
                         { list.map((feature)=>(
                            <li className='lilist'>{feature}</li>
                         )

                    )  }
                    </div>
                    <button className='craftbutton'>Add TO Craft <i class="ri-shopping-cart-line"></i></button>
                    </div> 
             </div>
                <span className='bl-'> <h2 className="font-bold text-xl "style={{marginTop:'20px' ,marginBottom:'20px'}}>Course Content</h2></span> 
             <div className='course-content'>
                    <CourseContent />

             </div>
             {/* <div>
                <h2 className='font-bold text-xl ' style={{marginTop:'20px' ,marginBottom:'20px'}}>Courses you might like</h2>
             <CoursesList/>
             </div> */}
    </div>
    </>
    )
  
}

export default CoursePage