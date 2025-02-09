import React from 'react'
import BannerSection from '../components-section/BannerSection'
import Whywechoose from '../components-section/Whywechoose'
import Foodlist from '../components-section/Foodlist'
import FoodShowTabs from '../components-section/FoodShowTabs'
import AlltypeEventOrder from '../components-section/AlltypeEventOrder'
import Testimonialslider from '../components-section/Testimonialslider'

const Home = () => {
  return (
    <div>
        <BannerSection/>
       <Whywechoose/> 
       <Foodlist/>
       <FoodShowTabs/>
       <AlltypeEventOrder/>
       <Testimonialslider/>
    </div>
  )
}

export default Home