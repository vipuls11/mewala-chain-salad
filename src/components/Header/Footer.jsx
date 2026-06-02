import React from 'react'
import '../../css/Footer.css'
import { Link } from 'react-router-dom'
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
const Footer = () => {
    const image = "/logo/logo-removebg-preview.png";

    return (
        <footer className='main_footer'>
            <div className='footer-shell'>
                <div className='footer-badge'>Fresh, fast & full of flavor</div>

                <div className='footer-grid'>
                    <article className='footer-card footer-card--wide'>
                        <div className='brand-wrap'>
                            <img src={image} alt="Header_logo" className='footer-logo' />
                            <img src="/logo/!Veg_symbol.svg" alt="Veg symbol" className='footer-badge-icon' />
                        </div>
                        <p className='footer-copy'>Enjoy healthy salads, indulgent wraps, and daily specials crafted with fresh ingredients and bold flavors for every craving.</p>
                        <div>
                            <h3 className='footer-subtitle'>Online Orders</h3>
                            <ul className='delivery-list'>
                                <li><img src="/logo/swiggy-1.svg" alt="Swiggy" className='delivery-icon' /></li>
                                <li><img src="/logo/zomato-2.svg" alt="Zomato" className='delivery-icon delivery-icon--wide' /></li>
                                <li><img src="/logo/Dunzo_Logo.svg" alt="Dunzo" className='delivery-icon delivery-icon--wide' /></li>
                            </ul>
                        </div>
                    </article>

                    <article className='footer-card'>
                        <h3 className='footer-subtitle'>Quick Links</h3>
                        <ul className='footer-links'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/gallery'>Gallery</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </article>

                    <article className='footer-card'>
                        <h3 className='footer-subtitle'>Popular Picks</h3>
                        <ul className='footer-links'>
                            <li>MEWALAL PANEER SALADS <small className='jain_card'>Jain / <span className='non-jain'>Non-jain</span></small></li>
                            <li>SALAD SPECIAL</li>
                            <li>SWEET CORN <small className='jain_card'>Jain / <span className='non-jain'>Non-jain</span></small></li>
                            <li>CHANA MASALA <small className='jain_card'>Jain / <span className='non-jain'>Non-jain</span></small></li>
                        </ul>
                    </article>
                </div>

                <div className='info-grid'>
                    <article className='info-card'>
                        <h3 className='footer-subtitle'><span className='info-icon'><PersonPinCircleIcon /></span> Location</h3>
                        <p>Zaveri Building, Ground Floor, Near Jain Nursing Home, Opp. Rajan Wines Shop, Old Nagardas Road, Andheri (East), Mumbai-400069.</p>
                    </article>
                    <article className='info-card'>
                        <h3 className='footer-subtitle'><span className='info-icon'><AccessTimeIcon /></span> Working Hours</h3>
                        <p>Mon–Sun : <span className='highlight-text'>4:00 pm to 11:00 pm</span></p>
                    </article>
                    <article className='info-card'>
                        <h3 className='footer-subtitle'><span className='info-icon'><CallIcon /></span> Contact Us</h3>
                        <div className='contact-block'>
                            <a href="tel:8928314302">89283 14302</a>
                            <a href="tel:7039808812">70398 08812</a>
                        </div>
                        <p className='party-note'>Party orders for birthdays, weddings & get-togethers are always welcome.</p>
                    </article>
                </div>

                <div className='footer-bottom'>
                    © 2026 Mewala Chain Salad. Fresh ingredients, happy cravings.
                    <div className='footer-credit'>Developed by digitalwebapp.in</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer