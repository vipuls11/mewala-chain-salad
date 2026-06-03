import React from 'react';
import '../css/BannerSection.css';

const BannerSection = () => {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: "linear-gradient(135deg, rgba(15, 23, 42, 0.76), rgba(88, 28, 135, 0.66)), url('/logo/chain-banner.jpg')" }}
    >
      <div className="hero-overlay" />
      <div className="container hero-inner">
        <div className="hero-card">
          <p className="hero-chip">Fresh • Healthy • Full of Flavor</p>
          <h1>
            Welcome to <span>Mewala Pasta & Salad</span>
          </h1>
          <h2>Fresh salads, wraps, soups, and daily specials crafted for every craving.</h2>

          <div className="hero-stats">
            <span>Jain & Non-Jain Options</span>
            <span>Open 4 PM – 11 PM</span>
            <span>Party Orders Available</span>
          </div>

          <div className="btns">
            <a href="#menu" className="btn-menu">Explore Menu</a>
            <a href="#book-a-table" className="btn-book">Book a Party</a>
          </div>
        </div>

        <aside className="hero-side-card">
          <p className="mini-label">Today’s Favorite</p>
          <h3>Paneer Salads & Crunchy Wraps</h3>
          <p>Light, vibrant, and made with fresh ingredients for a wholesome meal.</p>
          <a href="#menu" className="mini-link">See our best sellers →</a>
        </aside>
      </div>
    </section>
  );
};

export default BannerSection;
