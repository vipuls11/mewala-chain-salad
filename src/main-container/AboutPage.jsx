import React from 'react'
import '../css/AboutPage.css'

const AboutPage = () => {
  const highlights = [
    {
      title: 'Fresh from the kitchen',
      text: 'Every bowl starts with crisp greens, seasonal produce, and house-made sauces that bring real freshness to every bite.',
      image: '/images/salads/Salads_Greek.webp',
    },
    {
      title: 'Made for every craving',
      text: 'From light salads and hearty wraps to refreshing drinks and family-friendly sides, our menu is designed for busy lunches and relaxed dinners alike.',
      image: '/images/wraps/Wraps_Thai.webp',
    },
    {
      title: 'A warm dining experience',
      text: 'We blend quality ingredients, inviting service, and a clean modern atmosphere so guests feel welcomed the moment they arrive.',
      image: '/images/feature-menu/PitaChipsHummusTapanade-1-e1746588129216.webp',
    },
  ]

  return (
    <main className="about-page-shell mt-16">
      <section className="about-hero-card">
        <div className="about-hero-copy">
          <p className="about-eyebrow">About Mewala Pasta & Salad</p>
          <h1>Healthy, colorful, and crafted with care.</h1>
          <p className="about-intro">For over 10 years, Mewala Pasta & Salad has been serving fresh, wholesome salads that bring comfort and confidence to every plate. What started as a roadside dream by a 35-year-old food lover has grown into a trusted place where delicious salads and happy customers go hand in hand.</p>
          <p className="about-intro">From humble beginnings to a vibrant brand, every bowl carries the story of hard work, passion, and the belief that simple ingredients can create unforgettable taste.</p>
          <div className="about-pill-row">
            <span>10+ years serving salads</span>
            <span>Roadside dream turned brand</span>
            <span>35-year-old journey of passion</span>
          </div>
        </div>
        <div className="about-hero-visual">
          <img src="/images/Drinks/Drinks_BlueberryBasilLemonade.webp" alt="Fresh drink display" />
          <div className="about-floating-card">
            <strong>Why guests love us</strong>
            <p>Bright flavors, wholesome ingredients, and a welcoming vibe that keeps people coming back.</p>
          </div>
        </div>
      </section>

      <section className="about-grid">
        <article className="about-card about-card--wide">
          <p className="about-label">Our story</p>
          <h2>Built around freshness, flavor, and convenience.</h2>
          <p>Mewala Pasta & Salad began with a simple goal: to turn humble roadside beginnings into a place where fresh, delicious salads could win hearts. After years of dedication, the journey has grown into a brand loved for its flavor, freshness, and the passion behind every serving.</p>
        </article>
        <article className="about-card">
          <p className="about-label">Signature promise</p>
          <h3>Every meal feels balanced</h3>
          <p>Healthy ingredients, bold seasonings, and appealing presentation come together in every bowl, wrap, and drink.</p>
        </article>
        <article className="about-card">
          <p className="about-label">Perfect for groups</p>
          <h3>Celebrate with fresh plates</h3>
          <p>Our menu works beautifully for office lunches, birthdays, and family gatherings alike with easy ordering and reliable quality.</p>
        </article>
      </section>

      <section className="about-highlights">
        {highlights.map((item) => (
          <article className="highlight-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="about-cta-card">
        <div>
          <p className="about-label">Visit us</p>
          <h2>Enjoy the Mewala experience today.</h2>
          <p>Explore the menu, discover fresh favorites, and make your next meal feel bright, healthy, and memorable.</p>
        </div>
        <a className="about-cta-button" href="/">Back to Home</a>
      </section>
    </main>
  )
}

export default AboutPage
