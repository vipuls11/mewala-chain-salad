import React from 'react'
import '../css/GalleryPage.css'

const galleryItems = [
  { image: '/images/salads/Salads_Greek.webp', title: 'Fresh greens', caption: 'Bright salads crafted with color, crunch, and freshness.' },
  { image: '/images/wraps/Wraps_Thai.webp', title: 'Flavor-packed wraps', caption: 'Balanced wraps that feel hearty, healthy, and satisfying.' },
  { image: '/images/Drinks/Drinks_BlueberryBasilLemonade.webp', title: 'Cool refreshers', caption: 'Sparkling, chilled drinks that bring the whole meal to life.' },
  { image: '/images/feature-menu/PitaChipsHummusTapanade-1-e1746588129216.webp', title: 'Chef specials', caption: 'A visual taste of the freshness and creativity behind every order.' },
]

const GalleryPage = () => {
  return (
    <main className="gallery-page-shell mt-16">
      <section className="gallery-hero-card">
        <div>
          <p className="gallery-eyebrow">Gallery</p>
          <h1>See the vibrant food story behind every plate.</h1>
          <p className="gallery-intro">Our gallery brings together the colors, freshness, and energy that make the Mewala experience so unforgettable for guests and families alike.</p>
        </div>
        <div className="gallery-badges">
          <span>Fresh ingredients</span>
          <span>Beautiful presentation</span>
          <span>Healthy comfort</span>
        </div>
      </section>

      <section className="gallery-grid">
        {galleryItems.map((item) => (
          <article className="gallery-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div className="gallery-card-body">
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="gallery-cta-card">
        <div>
          <p className="gallery-eyebrow">Visit the experience</p>
          <h2>Let the visuals tempt you into your next order.</h2>
          <p>Every image reflects the care, freshness, and flavor that make Mewala a place people want to return to.</p>
        </div>
        <a className="gallery-cta-button" href="/">Explore more</a>
      </section>
    </main>
  )
}

export default GalleryPage
