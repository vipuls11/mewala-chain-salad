import React, { useState } from 'react'
import '../css/Foodlist.css'; // Import the custom CSS
import { dataList } from '../datalistening/datalist';

const Foodlist = () => {
    const [category, setCategory] = useState(dataList);
    const [activeBtn, setActiveBtn] = useState('All'); // State to track active button
    // const uniqueNumbers = [...new Set(dataList)];

    
    // Create a new Set to track unique `id` values
    const seenIds = new Set();
    
    // Filter the array to only keep objects with unique `id`
    const uniqueArr = dataList.filter(item => {
        if (!seenIds.has(item.kind)) {
            seenIds.add(item.kind);
            return true;
        }
        return false;
    });
    console.log(uniqueArr, "kinds")



    const handleBtns = (e) => {
    let word=e.target.value;
    setActiveBtn(word); // Set active button value
    if(word === "All"){
      setCategory(dataList)
    }
    else if(word === "Cars") {
      const filtered = dataList.filter(item=>item.kind === "Cars");
      setCategory(filtered)
    }
    else if(word === "Views") {
      const filtered = dataList.filter(item=>item.kind === "Views");
      setCategory(filtered)
    }
  }
 
  return (
    <>
      <section>
        <div className=' w-[90%] m-auto pb-20'>
        <div className="section-title">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>
        <div className='flex'>
        <div className='flex flex-col float-left w-72'>
            <button value="All" onClick={handleBtns}  className={`${activeBtn === 'All' ? 'active' : ''} text-left py-2 px-4`}>All</button>
            {
                uniqueArr.map((btn)=><button value={btn.kind} onClick={handleBtns} className={`${activeBtn === btn.kind ? 'active' : ''} text-left py-2 px-4`}>{btn.kind}</button>)
            }
            {/* <button value="All" onClick={handleBtns}>All</button>
            <button value="Cars" onClick={handleBtns}>Cars</button>
            <button value="Views" onClick={handleBtns}>Views</button> */}
          </div>
 
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 px-10'>
            {category.map((item) => (
              <div key={item.id}>
                <div className='flex gap-5'>
                  <img src={item.linkImg} alt={item.name}  className='w-24 h-24 rounded-full'/>
                  <div>
                    <h1>{item.name}</h1>
                    <p>{item.kind}</p>
                     <p>{item.info} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        </section>
    </>
  )
}

export default Foodlist