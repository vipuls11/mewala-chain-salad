import React, { useState } from 'react'
import { foodCategories } from '../datalistening/foodshowtabs'

const FoodShowTabs = () => {
  const [activeTab, setActiveTab] = useState('Salads')

  return (
    <section className="w-[92%] mx-auto py-20">
      <div className="section-title text-center md:text-left">
        <h2>Featured Menu</h2>
        <p>Explore our best-loved favorites</p>
        <p className="mt-3 text-[0.98rem] font-medium leading-7 text-slate-600">A curated look at our most popular salads, wraps, drinks, and sides — all styled to feel fresh and restaurant-real.</p>
      </div>

      <div className="tabs flex flex-wrap justify-center gap-3 md:justify-start">
        {Object.keys(foodCategories).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveTab(category)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${activeTab === category ? 'border-orange-400 bg-orange-500 text-white shadow-lg shadow-orange-200' : 'border-slate-200 bg-white text-slate-700 hover:border-orange-200 hover:bg-orange-50'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {foodCategories[activeTab].map((item) => (
          <article key={item.name} className="overflow-hidden rounded-[28px] border border-orange-100 bg-white shadow-[0_18px_45px_-18px_rgba(124,58,237,0.35)] transition hover:-translate-y-1 hover:border-orange-300">
            <img src={item.image} alt={item.name} className="h-48 w-full object-contain" />
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">{activeTab}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-800">{item.name}</h3>
              <p className="mt-2 text-slate-600 leading-6">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FoodShowTabs