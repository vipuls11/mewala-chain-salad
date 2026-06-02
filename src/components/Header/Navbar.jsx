import React, { useEffect, useState } from 'react'
import '../../css/Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Navbar = () => {
  const [showData, setShowData] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const image = '/logo/logo-removebg-preview.png'

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleData = () => setShowData(prev => !prev)

  return (
    <>
      <div
        className={`mobile-backdrop ${showData ? 'show' : ''}`}
        onClick={toggleData}
        aria-hidden="true"
      />

      <nav className={`main_header ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="brand-link" onClick={() => setShowData(false)}>
          <div className="brand-wrap">
            <img src={image} alt="Header_logo" className="brand-logo" />
            <img src="/logo/!Veg_symbol.svg" alt="Veg symbol" className="veg-badge" />
          </div>
        </Link>

        <div className="lg:block hidden">
          <ul className="nav-links">
            <li className={`nav-item ${isActive('/about') ? 'nav-active' : ''}`}>
              <Link to="/about" className="text-white hover:text-orange-200">About Us</Link>
            </li>
            <li className={`menu nav-item ${isActive('/menu') ? 'nav-active' : ''}`}>
              <Link to="/menu" className="product_offer">Menu</Link>
              {/* <ul className="sub_menu">
                <li><div className="sub_menu-tip"><ArrowDropUpIcon /></div></li>
                <li className="sub_menu-item"><Link to="/menu" onClick={() => setShowData(false)}><span><ChevronRightIcon /></span>Fresh Salads & Wraps</Link></li>
                <li className="sub_menu-item"><Link to="/menu" onClick={() => setShowData(false)}><span><ChevronRightIcon /></span>Drinks & Sides</Link></li>
                <li className="sub_menu-item"><Link to="/menu" onClick={() => setShowData(false)}><span><ChevronRightIcon /></span>Family-friendly Picks</Link></li>
              </ul> */}
            </li>
            <li className={`menu nav-item ${isActive('/gallery') ? 'nav-active' : ''}`}>
              <Link to="/gallery" className="product_offer">Gallery</Link>
              {/* <ul className="sub_menu gallery-menu">
                <li><div className="sub_menu-tip"><ArrowDropUpIcon /></div></li>
                <li className="sub_menu-item"><Link to="/gallery" onClick={() => setShowData(false)}><span><ChevronRightIcon /></span>Fresh Ingredients</Link></li>
                <li className="sub_menu-item"><Link to="/gallery" onClick={() => setShowData(false)}><span><ChevronRightIcon /></span>Chef Specials</Link></li>
                <li className="sub_menu-item"><Link to="/gallery" onClick={() => setShowData(false)}><span><ChevronRightIcon /></span>Healthy Picks</Link></li>
              </ul> */}
            </li>
            <li className={`nav-item ${isActive('/contact') ? 'nav-active' : ''}`}>
              <Link to="/contact" className="text-white hover:text-orange-200">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="lg:block hidden">
          <button className="cta-button">Order Now</button>
        </div>

        <button
          type="button"
          className={`mobile-toggle ${showData ? 'active' : ''}`}
          onClick={toggleData}
          aria-label="Toggle menu"
        >
          {showData ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <aside className={`Responsive_header ${showData ? 'open' : ''}`}>
        <div className="mobile-brand">
          <img src={image} alt="Header_logo" className="brand-logo" />
        </div>
        <p className="mobile-copy">Fresh salads, wraps, soups & more made for every craving.</p>
        <ul className="mobile-nav-list">
          <li className={isActive('/about') ? 'nav-active' : ''}><Link to="/about" onClick={toggleData}>About Us</Link></li>
          <li className={isActive('/menu') ? 'nav-active' : ''}><Link to="/menu" onClick={toggleData}>Menu</Link></li>
          <li className={isActive('/gallery') ? 'nav-active' : ''}><Link to="/gallery" onClick={toggleData}>Gallery</Link></li>
          <li className={isActive('/contact') ? 'nav-active' : ''}><Link to="/contact" onClick={toggleData}>Contact Us</Link></li>
        </ul>
        <button className="cta-button full-width">Start Your Order</button>
      </aside>
    </>
  )
}

export default Navbar
