import React from 'react'
import Navbar from './Navbar'
import Script from './shared/Script'
import Homepage from './Homepage'

const Home = () => {
  return (
    <div>
        <Script overflow={true}/>
        <Navbar />
        <Homepage />
        <Script overflow={true}/>
    </div>
  )
}

export default Home