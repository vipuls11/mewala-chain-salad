import React, { useState } from 'react'
import '../../css/Navbar.css'
import { Link } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [showData, setShowData] = useState(false);
   const image = "/logo/logo-removebg-preview.png";
  console.log(image)

 const  humburger = ()=>{
      // alert('hello')
    
      return (
        <>
          {showData && (
            <div className='Responsive_header fixed top-0 left-0 h-screen w-80  lg:hidden block'>
              <img src={image} alt="Header_logo"  className='w-100'/> 
              <p>hellooo</p>
            </div>
          )}
        </>
      );
      
  }

  const toggleData = () => {
    setShowData(prev => !prev);
  }
  return (
    <>
    <nav className='main_header flex gap-20  lg:justify-center justify-between items-center border-b py-2 lg:px-0 px-4'>
      <div>
   <Link to="">
   <div className='relative'>
           <img src={image} alt="Header_logo"  className='w-72 '/>  
           <img src="/logo/!Veg_symbol.svg" alt="Header_logo"  className='w-8 absolute top-0 -right-5'/>  
           </div>
  
   </Link>   
    </div> 
    <div className="lg:block hidden">
        <ul className='flex justify-around gap-5 items-center'>
            <li className='px-2 py-6 hover:bg-orange-300 font-semibold'>About Us</li>
            <li className={`menu relative px-2 py-6 text-black font-semibold`}><Link className='product_offer cursor-pointer text-black underline-none'>Menu </Link>
                <ul className='sub_menu absolute top-[72px]  w-60 left-0 font-thin bg-white border-t-2 border-t-orange-300 hidden shadow-lg'>
                  <li><div className='absolute top-[-17px] left-24 text-orange-300'><ArrowDropUpIcon/></div></li>
                    <li className='flex items-center  mb-2 py-2  hover:bg-orange-300 text-medium border-b borber-b-grey-300'><span><ChevronRightIcon/></span>Mutual Funds</li>
                    <li className='flex items-center  mb-2 py-2  hover:bg-orange-300 text-medium border-b borber-b-grey-300'><span className=''><ChevronRightIcon/></span> Insurance</li>
                    <li className='flex items-center  mb-2 py-2  hover:bg-orange-300 text-medium border-b borber-b-grey-300'><span><ChevronRightIcon/></span> Stock Broking</li>
                    <li className='flex items-center  mb-2 py-2  hover:bg-orange-300 text-medium border-b borber-b-grey-300'><span><ChevronRightIcon/></span> Fixed Income Products</li>
                    <li className='flex items-center  mb-2 py-2  hover:bg-orange-300 text-medium border-b borber-b-grey-300'><span><ChevronRightIcon/></span> Property</li>
                    <li className='flex items-center py-2  hover:bg-orange-300 text-medium border-b borber-b-grey-300'><span><ChevronRightIcon/></span> Loan</li>
                  
                </ul>
            </li>
            <li className='menu relative px-2 py-6  hover:bg-orange-300 font-semibold'>Gallery 
            <ul className='sub_menu absolute top-[72px]  w-[400px] left-0 font-thin bg-white border-t-2 border-t-orange-300 hidden shadow-lg'>
                  <li><div className='absolute top-[-17px] left-24 text-orange-300'><ArrowDropUpIcon/></div></li>
                    <li className='flex items-center  mb-2 py-2  hover:bg-orange-300 text-medium border-b borber-b-grey-300'><span><ChevronRightIcon/></span>Mutual Funds</li>
                    <li className='flex items-center  mb-2 py-2  hover:bg-orange-300 text-medium border-b borber-b-grey-300'><span className=''><ChevronRightIcon/></span> Insurance</li>
                    <li className='flex items-center  mb-2 py-2  hover:bg-orange-300 text-medium border-b borber-b-grey-300'><span><ChevronRightIcon/></span> Stock Broking</li>
                    <li className='flex items-center  mb-2 py-2  hover:bg-orange-300 text-medium border-b borber-b-grey-300'><span><ChevronRightIcon/></span> Fixed Income Products</li>
                    <li className='flex items-center  mb-2 py-2  hover:bg-orange-300 text-medium border-b borber-b-grey-300'><span><ChevronRightIcon/></span> Property</li>
                    <li className='flex items-center py-2  hover:bg-orange-300 text-medium border-b borber-b-grey-300'><span><ChevronRightIcon/></span> Loan</li>                 
                </ul>
            </li>
    
            <li className='px-2 py-6 hover:bg-orange-300 font-semibold'>Contact Us </li>
        </ul>
    </div> 

    <div className='lg:block hidden'>
        <button className='bg-transparent px-4 py-2 shadow-xl rounded-lg  border border-orange-300'>Click ME</button>
    </div>
    <div class='lg:hidden  block' >
      <button><span className='h-[4px] w-[50px] text-red-700' onClick={toggleData}><MenuIcon/></span></button>
    </div>
   
    </nav>
    
    {humburger()}
    
    </>
  )
}

export default Navbar
