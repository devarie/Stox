import React from "react";
// { useRef, useState }
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function App() {
    const images = [
        { image: require("../images/Dagelijks.JPG") },
        { image: require("../images/Sport.JPG") },
        { image: require("../images/Skien.JPG") },
        { image: require("../images/Reizen.JPG") },
        { image: require("../images/Herstellen.JPG") },
        { image: require("../images/Wandelen.JPG") },
        { image: require("../images/Medisch.JPG") },
      ];
  
  
  return (
    <>
    <Swiper slidesPerView={3} spaceBetween={30} pagination={{
  "clickable": true
}} className="mySwiper">
  <SwiperSlide><img className="swiper-image" alt="image1" src={images[0].image}></img></SwiperSlide>
  <SwiperSlide><img className="swiper-image" alt="image2" src={images[1].image}></img></SwiperSlide>
  <SwiperSlide><img className="swiper-image" alt="image3" src={images[2].image}></img></SwiperSlide>
  <SwiperSlide><img className="swiper-image" alt="image4" src={images[3].image}></img></SwiperSlide>
  <SwiperSlide><img className="swiper-image" alt="image5" src={images[4].image}></img></SwiperSlide>
  <SwiperSlide><img className="swiper-image" alt="image6" src={images[5].image}></img></SwiperSlide>
  <SwiperSlide><img className="swiper-image" alt="image7" src={images[6].image}></img></SwiperSlide>
  </Swiper>

    </>
  )
}