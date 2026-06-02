import React from 'react'
import '../css/MenuPage.css'

const menuCards = [
  {
    title: 'Fresh Salads',
    text: 'Crunchy greens, colorful toppings, and fresh dressings that make every bite feel light, bold, and satisfying.',
    image: '/images/salads/Salads_Greek.webp',
    badge: 'Best Seller',
  },
  {
    title: 'Wraps & Bowls',
    text: 'Hearty wraps and nourishing bowls packed with flavor, texture, and ingredients that keep customers coming back.',
    image: '/images/wraps/Wraps_Thai.webp',
    badge: 'Customer Favorite',
  },
  {
    title: 'Drinks & Refreshers',
    text: 'Cool, bright beverages that pair perfectly with a fresh meal and leave a lasting impression.',
    image: '/images/Drinks/Drinks_BlueberryBasilLemonade.webp',
    badge: 'Refreshing',
  },
  {
    title: 'Sides & Kids Picks',
    text: 'Simple, tasty, and family-friendly options for every craving, from quick bites to full comfort meals.',
    image: '/images/sides&kids/Kids.webp',
    badge: 'Family Friendly',
  },
]

const MenuPage = () => {
  return (
    <main className="menu-page-shell mt-16">
      <section className="menu-hero-card">
        <div>
          <p className="menu-eyebrow">Menu Highlights</p>
          <h1>Fresh flavors made to keep you coming back.</h1>
          <p className="menu-intro">From crisp salads to thick, satisfying wraps and cool drinks, every item is crafted to feel wholesome, vibrant, and memorable.</p>
          <div className="menu-pill-row">
            <span>Fresh daily</span>
            <span>Healthy & hearty</span>
            <span>Party-ready choices</span>
          </div>
        </div>
        <div className="menu-hero-visual">
          <img src="/images/feature-menu/PitaChipsHummusTapanade-1-e1746588129216.webp" alt="Chef menu spread" />
          <div className="menu-floating-card">A menu designed for lunch breaks, family dinners, and repeat cravings.</div>
        </div>
      </section>

      <section className="menu-grid">
        {menuCards.map((item) => (
          <article className="menu-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div className="menu-card-body">
              <span className="menu-badge">{item.badge}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="menu-cta-card">
        <div>
          <p className="menu-eyebrow">Why it works</p>
          <h2>Every plate feels fresh, bright, and worth another visit.</h2>
          <p>Our menu blends balance, flavor, and comfort so guests return for the food, the feeling, and the experience.</p>
        </div>
        <a className="menu-cta-button" href="/">Back to home</a>
      </section>
    </main>
  )
}

export default MenuPage
