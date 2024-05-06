import React from 'react'
import Navbar from './Navbar'
import Script from './shared/Script'
import Homepage from './Homepage'

const Home = () => {
  return (
    <div>
        <Script />
        <Navbar />
        <Homepage />
        <Script />
    </div>
  )
}

export default Home