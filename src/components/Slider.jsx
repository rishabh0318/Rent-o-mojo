import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const[data,setData]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
    try {
      const api = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:uhK746lq/laptopdb");
      if (!api.ok) {
        throw new Error(`Error: ${api.status}`); // Handle HTTP errors
      }
  
      const data1 = await api.json();
      const t= JSON.stringify(data1);
      //console.log(data1);  Log the full response first
      
      
      // Uncomment this if `title` exists in the response structure
      // console.log(data1.title); 
    } catch (error) {
      console.error("Error fetching data:", error); // Catch and log any error
    }
  };
   // const fetchData=async()=>{
    //  const api= await fetch("https://x8ki-letl-twmt.n7.xano.io/api:uhK746lq/laptopdb")
    //  const data1= await api.json();
    
    //  console.log(data1.title);
   // }

    fetchData();
  },[])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3></h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
