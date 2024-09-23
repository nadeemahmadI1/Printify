import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css';
import Hero from './components/Hero/Hero';
import Feature from './components/Features/Feature';
import Products from './components/AllProdducts/Products';
import Carousel from './components/Slider/Carousel.jsx';


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Products />
      <Carousel/>
     
    </>
  )
}

export default App
