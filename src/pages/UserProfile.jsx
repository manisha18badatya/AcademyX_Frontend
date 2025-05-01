import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Stylesheets/Profile.css";
import Navbar from "../components/navbar";

const UserProfile = () => {
  const [userDashboardData,setUserDashboardData] = useState([])
 
  useEffect(()=>{
    const dashboardData = async ()=>{
      const response = await fetch("http://localhost:8080/api/v1/dashboards/",{
        method: "GET",
        credentials: "include" 
      })
      const userDashboard = await response.json()
      console.log(userDashboard.data[0])
      setUserDashboardData(userDashboard.data[0])
      

    }
    dashboardData()
  },[])

  return (
    <div className="page1">
      <Navbar />
      {/* Profile Banner */}
      <div className="banner">Banner</div>

      <div className="head-container">
        <div className="main-data">
          <div className="pfp">
            <img src="/public/Image/pfp1.png" />
          </div>
          <h2 className="name">@{userDashboardData.username}</h2>
          <p className="bio">
            User bio - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="main-buttons">
          <button className="edit-profile">Edit your profile ✏️</button>

          <NavLink to="/createcourse">
            <button className="create-course">Create Course</button>
          </NavLink>
        </div>
      </div>

      {/* Tabs */}
      <div className="links">
        <NavLink className="">My Library</NavLink>
        <NavLink className="">History</NavLink>
        <NavLink className="">Lists</NavLink>
      </div>

      <hr />

      <div className="bottom-container">
        <div className="left-column">
          <div className="">
            {/* About */}
            <section className="">
              <h2 className="head1">About</h2>
              <p className="about-box">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>

            {/* Courses */}
            <section className="mb-10">
              <h2 className="head1">Courses</h2>
              <div className="courses-box">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="">
                    <div className="">
                      <span className="">▶</span>
                    </div>
                    <div className="">
                      <h4 className="f">Lorem ipsum dolor</h4>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Lists */}
            <section className="mb-10">
              <h3 className="">Lists</h3>
              <div className="">
                <div className="">▶</div>
                <div>
                  <h4 className="">Playlist 1</h4>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="right-column">
            <ul className="options">
              <li>Edit profile</li>
              <li>Subscriptions</li>
              <li>Orders and course management</li>
              <li>Certificates</li>
              <li>Account settings</li>
              <li>Notifications</li>
              <li>Messaging</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
