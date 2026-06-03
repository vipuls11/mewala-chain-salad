import React from 'react'

const data = [
  {
    id: 1,
    icon: '🥗',
    heading: 'Fresh Ingredients Daily',
    para: 'Crunchy greens, vibrant toppings, and bold flavors come together in every bowl for a truly refreshing bite.',
    accent: 'Freshness first',
  },
  {
    id: 2,
    icon: '💚',
    heading: 'Healthy Meets Delicious',
    para: 'Light, nourishing, and full of taste — our menu keeps every meal satisfying without feeling heavy.',
    accent: 'Light & satisfying',
  },
  {
    id: 3,
    icon: '🎉',
    heading: 'Perfect for Every Occasion',
    para: 'From quick lunches to party orders, we bring speed, consistency, and flavor that guests love to come back for.',
    accent: 'Party-ready service',
  },
]

const Whywechoose = () => {
  return (
    <section id="why-us" className="why-us w-[92%] mx-auto py-20">
      <div className="container">
        <div className="section-title text-center md:text-left">
          <h2 className="text-sm uppercase tracking-[0.35em] text-orange-500">Why Us</h2>
          <p className="mt-2 text-3xl font-black text-slate-800 md:text-4xl">Why Guests Love Mewala Past & Salad</p>
          <p className="mt-4 max-w-2xl text-[1rem] font-medium leading-7 text-slate-600">A fresh, vibrant dining experience made for health-conscious food lovers, quick bites, and memorable get-togethers.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {data.map((elem) => {
            const { id, icon, heading, para, accent } = elem

            return (
              <article
                key={id}
                className="group rounded-[28px] border border-orange-100 bg-gradient-to-br from-white via-violet-50 to-orange-50 p-8 shadow-[0_18px_45px_-18px_rgba(124,58,237,0.35)] transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_24px_55px_-18px_rgba(249,115,22,0.35)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">{icon}</span>
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-700">{accent}</span>
                </div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h4 className="text-2xl font-bold text-slate-800">{heading}</h4>
                  <span className="text-3xl font-black text-orange-400">0{id}</span>
                </div>
                <p className="text-slate-600 leading-7">{para}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Whywechoose