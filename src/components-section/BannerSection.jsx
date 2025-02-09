import React from 'react';
import '../css/BannerSection.css'; // Import the custom CSS

const BannerSection = () => {
  return (
    /* ======= Hero Section ======= */
    <section 
      id="hero" 
      className="relative w-full h-screen bg-cover bg-center opacity-90 bg-black"
      style={{ backgroundImage: "url('/logo/chain-banner.jpg')" }} // Set the background image here
    >
      <div className="container flex justify-center items-center w-full h-full">
        <div className="restaurantly flex items-end gap-10">
          <div>
            <h1>
              Welcome to <span>Restaurantly</span>
            </h1>
            <h2>Delivering great food for more than 18 years!</h2>

            <div className="btns">
              <a href="#menu" className="btn-menu animated fadeInUp scrollto">
                Our Menu
              </a>
              <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">
                Book a Table
              </a>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <a
              href="https://www.youtube.com/watch?v=GlrxcuEDyF8"
              className="glightbox play-btn"
            ></a>
          </div>
        </div>
      </div>
    </section>
    /* End Hero */
  );
};

export default BannerSection;
