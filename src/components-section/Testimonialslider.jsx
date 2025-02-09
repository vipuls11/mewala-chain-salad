import React, { useState } from "react";
import "../css/Testimonialslider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testmonial } from "../datalistening/testmonial";
import { FaStar } from 'react-icons/fa';

const Testimonialslider = () => {
  const [userreview, setUserreview] = useState(testmonial);
  console.log(userreview, "Testimonial");
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,

    responsive: [
        {
            breakpoint: 1200, // For screens less than or equal to 1024px
            settings: {
              slidesToShow: 3, // Show 2 slides
            },
          },
        {
            breakpoint: 1100, // For screens less than or equal to 1024px
            settings: {
              slidesToShow: 2, // Show 2 slides
            },
          },   
      {
        breakpoint: 768, // For screens less than or equal to 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
      {
        breakpoint: 480, // For screens less than or equal to 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  const maxLength = 250;
  return (
  <div className="bg-black  py-20">
      <div className="w-[90%] m-auto ">
      <div className="section-title">
        <h2>Testimonialslider</h2>
        <p>Check Our Tasty Menu</p>
      </div>

      <div className="slider-container">
        <Slider {...settings} className="px-4">
          {testmonial.map((testimonialelem) => {
            const { id, name, info, linkImg, rating } = testimonialelem;
            return (
              <div id={id} key={id} className="bg-black h-80  overflow-visible">
                <div className="relative  border-2 border-blue-500 p-5 bg-white">
                <h3>{name}</h3>
                  <p className="-5" maxLength={maxLength}>{info.length > maxLength ? info.substring(0, maxLength) + '...' : info}</p>
                  <div className="flex gap-1">
              {/* Render star icons based on the rating */}
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  color={index < rating ? "#FFD700" : "#ccc"} // Gold for filled stars, gray for empty stars
                />
              ))}
            </div>
                <img
                    src={linkImg}
                    alt={name}
                    className="testimonial_image w-28 h-28 bg-center rounded-full absolute -bottom-[72px] right-5 border-2 border-blue-500"
                  
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  </div>
  );
};

export default Testimonialslider;
