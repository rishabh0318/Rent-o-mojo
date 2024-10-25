import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function AutoPlay() {
    const[slider,setSlider]=useState([
     {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYmd2ZTgnzgC7tT6tssiEquGimjk5CnJTPA&s",
     },
     {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZOaQSvyvSXjmQwFzAZ1FfhlLrK2Og2U9Kw&s",
     },
     {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwiiIe22y4kOZStXKkZ0zfQx5lDYc2heFFbg&s",
      },
      {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHmW_4CBM28fW03jX_dq2prsXdWtXd2MRExg&s",
      },
      {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnhsFYf74WgzRDPiROBcCW4cQJTwi3CwypQ&s",
      },
      {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzX9cW6qhHQ4cqewxViRIaE0NcYvYojj_pWA&s",
      }
    ])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
     autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container" style={{width:"90%",margin:"auto"}}>
      <Slider {...settings}>
      {slider.map((slide)=><div key={slide}>
        <img src={slide.img} style={{height:"250px",width:"300px" ,margin:"auto",borderRadius:"10px",border:"3px solid black"}}/>
      </div>)}
      </Slider>
    </div>
  );
}

export default AutoPlay;
