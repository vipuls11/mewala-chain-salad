import React, { useState } from "react";
import "../css/Testimonialslider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testmonial } from "../datalistening/testmonial";
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const PrevArrow = ({ onClick }) => (
  <button type="button" className="testimonial-arrow testimonial-arrow-prev" onClick={onClick} aria-label="Previous testimonial">
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button type="button" className="testimonial-arrow testimonial-arrow-next" onClick={onClick} aria-label="Next testimonial">
    <FaChevronRight />
  </button>
);

const Testimonialslider = () => {
  const [userreview] = useState(testmonial)
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 1100, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="testimonial-section py-20">
      <div className="w-[92%] mx-auto">
        <div className="section-title text-center md:text-left">
          <h2>Testimonials</h2>
          <p>What Our Guests Say</p>
          <p className="mt-3 text-[0.98rem] font-medium leading-7 text-slate-600">Real feedback from guests who enjoy the freshness, flavor, and friendly experience at Mewala Chain Salad.</p>
        </div>

        <div className="slider-container testimonial-slider-shell">
          <Slider {...settings} className="px-1 md:px-2">
            {userreview.map((testimonialelem) => {
              const { id, name, role, info, linkImg, rating } = testimonialelem
              return (
                <article id={id} key={id} className="px-2 py-2">
                  <div className="testimonial-card rounded-[28px] border border-orange-100 bg-white p-6 shadow-[0_18px_45px_-18px_rgba(124,58,237,0.35)]">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">{name}</h3>
                        <p className="text-sm text-orange-500">{role}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                          <FaStar key={index} color={index < rating ? '#f59e0b' : '#e5e7eb'} size={16} />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-600 leading-7">“{info}”</p>
                    <img src={linkImg} alt={name} className="mt-5 h-16 w-16 rounded-full border border-orange-200 object-cover shadow-md" />
                  </div>
                </article>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonialslider;
