import React from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import Carousel from "react-elastic-carousel";
import { Footer } from '../components/Footer'
import '../global/global.css'
import { HeaderSlide } from '../components/HeaderSlide';


export default function Index() {

  return (
    <div>  
      <Header/>
      <Carousel>
      <HeaderSlide/>
      <HeaderSlide/>
      </Carousel>
      <Main/>
      <Footer/>
    </div>
  )
}
