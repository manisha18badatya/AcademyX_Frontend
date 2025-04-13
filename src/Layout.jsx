import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
import CoursePage from './components/coursePage/CoursePage'
function Layout() {
  return (
    <div>
      <Header/>
       <Outlet/>
        <Home/>
        <CoursePage/>
    </div>
  )
}

export default Layout