import React, { useState } from 'react'
import '../css/Foodlist.css'
import { dataList } from '../datalistening/datalist'

const Foodlist = () => {
  const [category, setCategory] = useState(dataList)
  const [activeBtn, setActiveBtn] = useState('All')

  const uniqueArr = [...new Set(dataList.map((item) => item.kind))]

  const handleBtns = (e) => {
    const word = e.target.value
    setActiveBtn(word)
    setCategory(word === 'All' ? dataList : dataList.filter((item) => item.kind === word))
  }

  return (
    <section id="menu" className="menu-section">
      <div className="w-[92%] mx-auto pb-20">
        <div className="section-title text-center md:text-left">
          <h2>Menu</h2>
          <p>Fresh picks from Mewala Chain Salad</p>
          <p className="mt-3 text-[0.98rem] font-medium leading-7 text-slate-600">A real taste of our salads, wraps, drinks, and sides — all made to feel fresh, colorful, and restaurant-ready.</p>
        </div>

        <div className="menu-layout">
          <aside className="menu-filter-panel">
            <button value="All" onClick={handleBtns} className={`filter-btn ${activeBtn === 'All' ? 'active' : ''}`}>
              All Items
            </button>
            {uniqueArr.map((btn) => (
              <button key={btn} value={btn} onClick={handleBtns} className={`filter-btn ${activeBtn === btn ? 'active' : ''}`}>
                {btn}
              </button>
            ))}
          </aside>

          <div className="menu-grid">
            {category.map((item) => (
              <article key={item.id} className="menu-card">
                <img src={item.linkImg} alt={item.name} className="menu-card-image" />
                <div className="menu-card-body">
                  <div className="menu-card-top">
                    <span className="menu-tag">{item.kind}</span>
                    <span className="menu-price">{item.price}</span>
                  </div>
                  <h3 className="menu-card-title">{item.name}</h3>
                  <p className="menu-card-info">{item.info}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Foodlist