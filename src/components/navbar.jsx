import React, { useState } from 'react'
import {Link,NavLink, Outlet} from 'react-router-dom'
import '../Stylesheets/Navbar.css';
import { useAuth } from '../context/AuthContext';


function Navbar() {

  const handlelogOut = (e) => {

      // Clear auth tokens or context values
    localStorage.removeItem("authToken"); // or whatever you're using

    // Force full page reload
      localStorage.removeItem("isLoggedIn");
      window.location.reload();
      setIsLoggedIn(false);
    }


  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  let [courseText,setCourseText]=useState("")
  return (
    <>
    
    <div className='navbar'>
        <nav>
            <div className='navleft'>
              <NavLink to= "/home"><img className="logo" src="/public/Image/background_removed_image_ryQNP8BvSu6YbNDZBfKXiA.png" alt="" /></NavLink>
              <NavLink to= "/home" className='acad'><div > AcademyX</div></NavLink>
            </div>
            <div className='navmiddle'>
                <ul className='ullist'>
                  <li> <NavLink className='navlink' to="/courses">Courses</NavLink></li>
                  <li> <NavLink className='navlink' to="/">Live</NavLink></li>
                  <li><NavLink className='navlink' to="/">Community</NavLink></li>
                </ul>
            </div>
            <div className='navright'>
                <span className='search'> <i class="ri-search-line"></i> <input
                  type="text" 
                  value={courseText}
                  onChange={(e)=>{
                  setCourseText(e.target.value)
                  }}
                  placeholder='Search for courses' />
                  </span>
                  {!isLoggedIn && (
                    <div>
                      <NavLink className= "login" to='/login'>Log in</NavLink>
                      <NavLink to='/signup' className='signup'>Sign up</NavLink>
                    </div>
                  )}
                  {isLoggedIn &&(
                    <NavLink to='/profile'  
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}>
                      <img className = 'pfp-icon' src="/public/Image/pfp.png"/>
                      {isOpen && (
                        <div className="dropdown">
                          <NavLink to="/courses" className="dropdown-content">My Profile</NavLink>
                          <NavLink to="/courses" className="dropdown-content">My library</NavLink>
                          <NavLink to="/courses/data" className="dropdown-content">Creator mode</NavLink>
                          <NavLink to="/courses/design" className="dropdown-content">Settings</NavLink>
                          <button onClick={handlelogOut} className='logout'> Log out </button>
                        </div>
                      )}
                      </NavLink>
                  )}

               
            </div>
        </nav>
    </div>
    
    </>
  )
}

export default Navbar