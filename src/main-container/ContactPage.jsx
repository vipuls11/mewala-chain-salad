import React from 'react'
import '../css/ContactPage.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CallIcon from '@mui/icons-material/Call'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'

const googleMapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Zaveri%20Building%2C%20Ground%20Floor%2C%20Near%20Jain%20Nursing%20Home%2C%20Opp.%20Rajan%20Wines%20Shop%2C%20Old%20Nagardas%20Road%2C%20Andheri%20East%2C%20Mumbai%20400069'

const ContactPage = () => {
  return (
    <main className="contact-page-shell mt-16">
      <section className="contact-hero-card">
        <div className="contact-copy">
          <p className="contact-eyebrow">Contact & Visit</p>
          <h1>Come taste the freshness in person.</h1>
          <p className="contact-intro">Visit our shop for wholesome salads, wraps, drinks, and daily specials. It is easy to reach, perfect for lunch, and great for party orders too.</p>
          <div className="contact-pill-row">
            <span>Fresh ingredients</span>
            <span>Party orders</span>
            <span>Simple directions</span>
          </div>
          <div className="contact-mini-grid">
            <article className="contact-mini-card">
              <LocationOnIcon className="contact-icon" />
              <strong>Prime location</strong>
              <span>Easy to find in Andheri East</span>
            </article>
            <article className="contact-mini-card">
              <DirectionsWalkIcon className="contact-icon" />
              <strong>Quick visit</strong>
              <span>Perfect for a fresh lunch stop</span>
            </article>
          </div>
        </div>

        <div className="contact-highlight-card">
          <img src="/images/feature-menu/PitaChipsHummusTapanade-1-e1746588129216.webp" alt="Fresh salad platter" className="contact-visual-image" />
          <div className="contact-overlay-box">
            <h3>Visit our location</h3>
            <p>Zaveri Building, Ground Floor, Near Jain Nursing Home, Opp. Rajan Wines Shop, Old Nagardas Road, Andheri (East), Mumbai-400069</p>
            <a className="contact-map-button" href={googleMapsUrl} target="_blank" rel="noreferrer">Get Directions on Google Maps</a>
          </div>
        </div>
      </section>

      <section className="contact-grid">
        <article className="contact-card">
          <p className="contact-label">Call us</p>
          <h3><CallIcon className="contact-icon" /> Speak to the team</h3>
          <a href="tel:8928314302">89283 14302</a>
          <a href="tel:7039808812">70398 08812</a>
          <p>Quick support for orders, party bookings, and menu questions.</p>
        </article>

        <article className="contact-card">
          <p className="contact-label">Working hours</p>
          <h3><AccessTimeIcon className="contact-icon" /> Open every day</h3>
          <p>Mon–Sun: 4:00 pm to 11:00 pm</p>
          <p>Ideal for evening cravings, family dinners, and quick takeaway orders.</p>
        </article>

        <article className="contact-card contact-card--wide">
          <p className="contact-label">Why customers visit</p>
          <h3>Fresh food, warm service, and a convenient location.</h3>
          <p>Whether you are stopping by for a healthy meal or planning a party order, our shop is designed to make your visit simple, welcoming, and rewarding.</p>
        </article>
      </section>

      <section className="contact-cta-card">
        <div>
          <p className="contact-label">Ready to visit?</p>
          <h2>Use the map button and reach us in one tap.</h2>
          <p>No complicated steps—just open directions, follow the route, and enjoy your favorite salads at the shop.</p>
        </div>
        <a className="contact-cta-button" href={googleMapsUrl} target="_blank" rel="noreferrer">Open Google Maps</a>
      </section>
    </main>
  )
}

export default ContactPage
