import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import "./styles.css";
import Banner from './assets/banner1.webp'
import Banner2 from './assets/banner2.webp'
import Banner3 from './assets/banner3.webp'
import Banner4 from './assets/banner4.webp'
import Banner5 from './assets/banner5.webp'
import Banner6 from './assets/banner6.jpg'



function NewCarousel(){
    
    return (
        <>
        <Carousel>
            <Card  src={Banner}/>
            <Card  src={Banner2}/>
            <Card  src={Banner3}/>
            <Card  src={Banner4}/>
            <Card  src={Banner5}/>
            <Card  src={Banner6}/>
        </Carousel>


        </>
    )
}
export default NewCarousel;

