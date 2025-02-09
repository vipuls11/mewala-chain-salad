import React, { useState } from 'react'
import { foodCategories } from '../datalistening/foodshowtabs';

const FoodShowTabs = () => {
   // State to manage the active tab
   const [activeTab, setActiveTab] = useState("Italian");
// Function to handle tab clicks
const handleTabClick = (category) => {
  setActiveTab(category);
};

return (
 <div>
   <div className='w-[90%] m-auto'>
    
    <div className="section-title text-center">
          <h2>Why Us</h2>
          <p>Why Choose Our Restaurant</p>
        </div>

    <div className="tabs flex justify-center gap-4 ">
      {Object.keys(foodCategories).map((category) => (
        <button
          key={category}
          onClick={() => handleTabClick(category)}
          className={`${activeTab === category ? "active" : ""} py-2 px-4`}
        >
          {category}
        </button>
      ))}
    </div>
    
    <div className="food-list">
      <h2>{activeTab} Specialities</h2>
      <ul>
        {foodCategories[activeTab].map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  </div>
 </div>
);
}

export default FoodShowTabs