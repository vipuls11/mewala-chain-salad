import React from 'react'
import '../../css/Footer.css'
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
const Footer = () => {
    const image = "/logo/logo-removebg-preview.png";
  return (
<footer className='main_footer'>
   <div className='w-[90%] m-auto py-14'>
   <div className='grid lg:grid-cols-4 gap-10 mb-5'>
        <div className='col-span-2'>
           <div className='relative'>
           <img src={image} alt="Header_logo"  className='w-96 '/>  
           <img src="/logo/!Veg_symbol.svg" alt="Header_logo"  className='w-8 absolute top-0 right-64'/>  
           </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolor cupiditate doloremque nisi. Reprehenderit illum repudiandae veritatis quas, eaque non, ad mollitia earum facere voluptates aut iure libero assumenda quaerat?</p>
            <div>
            <h3 className='text-xl font-semibold'>Online Orders</h3>
            <ul className='flex gap-5 items-center my-5'>
                <li><img src="/logo/swiggy-1.svg" alt="" className='w-10'/></li>
                <li><img src="/logo/zomato-2.svg" alt="" className='w-28' /></li>
                <li><img src="/logo/Dunzo_Logo.svg" alt="" className='w-28'/></li>
            </ul>
        </div>
        </div>
        <div>
            <h3 className='text-xl font-semibold'>Quick Links</h3>
            <ul className='leading-9 mt-5'>
                <li>Home</li>
                <li>About Us</li>
                <li>Menus</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>
        <h3 className='text-xl font-semibold'>Services</h3>
        <ul className='leading-9 mt-5'>
                <li>MEWALAL PANEER SALADS <small className='jain_card'>Jain / <span className='non-jain'>Non-jain</span></small></li>
                <li>SALAD SPECIAL</li>
                <li>SWEET CORN <small className='jain_card'>Jain / <span className='non-jain'>Non-jain</span></small></li>
                <li>CHANA MASALA <small className='jain_card'>Jain / <span className='non-jain'>Non-jain</span></small></li>
                <li>DIET SALADS <small className='jain_card'>Jain / <span className='non-jain'>Non-jain</span></small></li>
                <li>SOYACHUNKS SALADS <small className='jain_card'>Jain / <span className='non-jain'>Non-jain</span></small></li>
                <li>MUSHROOM SALADS </li>
                <li>FRIES </li>
                <li>BREAD & PASTA</li>
            </ul> 
        </div>
    </div>

    <div className='grid lg:grid-cols-3 '>
        <div className='border-2 border-[#E76F51] p-10'>
            <h3 className='text-xl font-semibold mb-5'><span><PersonPinCircleIcon/></span>Location</h3>
            <p>Zaveri Building, Ground Floor, Near Jain Nursing Home,
Opp. Rajan Wines Shop, Old Nagardas Road,
Andheri (East), Mumbai- 400 069.</p>
        </div>
        <div className='border-2 border-[#E76F51] p-10'>
            <h3 className='text-xl font-semibold mb-5'><span><AccessTimeIcon/></span> Working Hours</h3>
            <p>Mon-Sun : <span>4:00 pm to 11:00pm</span></p>
        </div>
        <div className='border-2 border-[#E76F51] p-10'>
            <h3 className='text-xl font-semibold mb-5'><span><CallIcon/></span> Contact Us</h3>
           <div className='mb-5'>
           <p><a href="tel:89283 14302">89283 14302
            </a></p>
            <p><a href="tel:70398 08812">70398 08812
            </a></p>
           </div>
            <div>
                <h3 className='text-lg font-semibold'>WE ACCEPT ALL TYPES OF PARTY ORDERS</h3>
                <h5 className='text-md font-semibold'> (Birthday Party, Wedding, Get Together, Etc.)</h5>
            </div>
        </div>
    </div>
   </div>
</footer>

  )
}

export default Footer