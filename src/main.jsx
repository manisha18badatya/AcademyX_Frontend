import React from 'react'
import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import Login from './components/Login/Login.jsx'
import Layout from './Layout.jsx'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'

import CoursePage from './components/coursePage/CoursePage.jsx'
import CoursesCategories from './components/coursesCategories/CoursesCategories.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='/Home' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/courses' element={<CoursesCategories/>} />
    <Route path='/courses' element={<CoursePage/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>
)

