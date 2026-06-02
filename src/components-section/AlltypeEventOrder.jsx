import React from 'react'

const eventCards = [
  {
    title: 'Birthday Parties',
    text: 'Fresh salads, wraps, and colorful sides arranged for a fun, easy celebration that feels special from the first bite.',
    image: '/images/wraps/Wraps_Cobb.webp',
  },
  {
    title: 'Office Gatherings',
    text: 'Quick, wholesome options for meetings, lunches, and team treats that keep everyone energized and satisfied.',
    image: '/images/salads/Salads_TuscanSummer.webp',
  },
  {
    title: 'Weddings & Events',
    text: 'Elegant, crowd-friendly menu selections designed to suit larger guest lists with fresh presentation and quality.',
    image: '/images/feature-menu/Salads_TuscanSummer.webp',
  },
  {
    title: 'Weekend Celebrations',
    text: 'A vibrant spread of salads, wraps, and drinks perfect for family dinners, reunions, and weekend get-togethers.',
    image: '/images/Drinks/Drinks_BlueberryBasilLemonade.webp',
  },
]

const AlltypeEventOrder = () => {
  return (
    <section className="w-[92%] mx-auto py-20">
      <div className="section-title text-center md:text-left">
        <h2>Events & Orders</h2>
        <p>Perfect for every celebration</p>
        <p className="mt-3 text-[0.98rem] font-medium leading-7 text-slate-600">From birthdays to office meetups, our menu is designed to bring fresh flavors, simple ordering, and memorable presentation to every occasion.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {eventCards.map((card) => (
          <article key={card.title} className="overflow-hidden rounded-[28px] border border-orange-100 bg-white shadow-[0_18px_45px_-18px_rgba(124,58,237,0.35)] transition duration-300 hover:-translate-y-1 hover:border-orange-300">
            <img src={card.image} alt={card.title} className="h-40 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-800">{card.title}</h3>
              <p className="mt-2 text-slate-600 leading-6">{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AlltypeEventOrder