import React  from 'react'
import Header from "./Header"
import Product from "./Product"
import HomeImg from "../Home_img.jpg";
import './Home.css';

const Home = () => {
  
  return(
    <>
    <Header />

      <img src={HomeImg} alt="homeImg" className='home__image' /> 
    
      <Product />
    </> 
  ) 
}

export default Home
