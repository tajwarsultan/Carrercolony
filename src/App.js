import React from 'react'
import { Home } from './pages/home/home'
import { NavBar } from './components/header/Navbar'
import {Work} from './components/work/Work'
import Catagories from './components/Catagories/Catagories'
import Projects from './components/Projects/index'
import Footer from './components/Footer/index'
import { Business } from "./components/business/Business";
import { Carrercolony } from './components/Carousel/Carrercolony'

function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
      <NavBar />
      <Home />
      <Work/>
      <Catagories/>
      <Business/>
      <Projects/>
      <Carrercolony/>
      <Footer/>
    </div>
  )
}

export default App
