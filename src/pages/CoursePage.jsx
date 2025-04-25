import React, { useState } from 'react'
import '../Stylesheets/CoursePage.css'
import CourseContent from '../components/CourseContent'
import CoursesList from '../components/CoursesList'
import Navbar from '../components/navbar';
function CoursePage() {
 let [list,setList]=useState(['Lorem Ipsum Dolo','sit Amet,Consectetu', 'R Adispiscing Elit,ed D','O Eiusmod Tempor','Incididunt Ut Ladore Et','Dolore Magna Aliqua','ut Enim Ad Minum Veniam','Quis Nostrud Execitation Ullamco Laboris','Nisi Ut Aliquio Ex Ea Commondo Consequant','Aute Irure Dolor In','Reprehenderit In'])

return <>
    <div className='course-page'>
        <Navbar/>
            <div className='headline'>
                    <img src="/public/Image/background_removed_image_ryQNP8BvSu6YbNDZBfKXiA.png" alt="" />
                    <h2 >Course <i class="ri-arrow-right-wide-line"></i> ui/ux Design <i class="ri-arrow-right-wide-line"></i>Figma complete guide</h2>
            </div>
            <div className='mid-page'>
                 <div className='mid-left'>
                 <div className='tittle'>
                <h2 >  Beginner's road to master Figma the best <br />design tool.</h2>
                <h3 >Created by <i class="ri-arrow-left-s-line"></i>Creator's Name<i class="ri-arrow-right-s-line"></i></h3>
            </div>
                     <div className='mid-page-bg'> 
                            <div className='overlay'>
                                    <div className='overlay-content'>
                                 
                            <span> <img src="" alt="img" />
                            <h1 >FIGMA</h1>
                            </span>
                            <h2 >Only design tool you need </h2>      
                     </div>
                        </div>
                        </div>
                            <div className='descripton'>
                                    <h2 >Description</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi velit sequi, vero nostrum commodi nobis, saepe aspernatur tenetur quidem, fugit consequuntur eligendi ratione iusto quisquam veritatis debitis accusantium asperiores maxime autem alias. Ipsam iusto et, minima quisquam ad aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia adipisci reprehenderit porro, hic totam nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, deleniti iusto eos dicta quisquam nostrum id sapiente veritatis minus consequuntur. </p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi velit sequi, vero nostrum commodi nobis, saepe aspernatur tenetur quidem, fugit consequuntur eligendi ratione iusto quisquam veritatis debitis accusantium asperiores maxime autem alias. Ipsam iusto et, minima quisquam ad aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt? Cum eaque provident quas quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati porro facere molestias velit quam. </p>
                            </div>

                    </div>
                    <div className='mid-right'>
                            <div className='mid-right-content'>
                                    <h2 >Price</h2>
                                    <div className='price'>
                                    <h3 > <i class="fa-solid fa-indian-rupee-sign"></i>999</h3>
                                    <button>Special offer</button>
                                    </div>
                                    <h3 >
                                     <span>70%</span> Discount</h3>

                                 <div className='cur-price'>
                                    <h1 ><i class="fa-solid fa-indian-rupee-sign"></i>299</h1>
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
                    <CourseContent/>
                    <CourseContent/>
                    <CourseContent/>
                    <CourseContent/>

             </div>
             <div>
                <h2 className='font-bold text-xl ' style={{marginTop:'20px' ,marginBottom:'20px'}}>Courses you might like</h2>
             <CoursesList/>
             </div>
    </div>
    </>
  
}

export default CoursePage