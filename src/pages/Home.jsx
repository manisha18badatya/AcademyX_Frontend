import React from 'react'
import HomeHero from '../components/Home/HomeHero'
import TopCreators from '../components/Home/TopCreators'
import Navbar from '../components/navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <HomeHero/>
      <TopCreators/>
    </div>
  )
}

export default Home