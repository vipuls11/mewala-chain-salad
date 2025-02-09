import React from 'react'

const data= [
    {
        id: 1,
        heading:'Lorem Ipsum',
        para:'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat',
    },
    {
        id: 2,
        heading:'Lorem Ipsum',
        para:'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat',
    },
    {
        id: 3,
        heading:'Lorem Ipsum',
        para:'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat',
    },

]

const Whywechoose = () => {
  return (
    <div className=' '>
         {/* ======= Why Us Section =======  */}
    <section id="why-us" className="why-us w-[90%] m-auto py-20">
      <div className="container">

        <div className="section-title">
          <h2>Why Us</h2>
          <p>Why Choose Our Restaurant</p>
        </div>

        <div className="grid grid-cols-3 gap-10">
            {
                data.map((elem)=>{
                    const {id , heading, para} =elem
                    return(
                        <div className="">
            <div className="box p-10 hover:bg-orange-300 hover:text-white">
              <span className='text-2xl font-bold'>{id}</span>
              <h4  className='text-3xl font-bold my-3'>{heading}</h4>
              <p>{para}</p>
            </div>
          </div>
                    )
                }
                    
                )
            }
       
       

        </div>

      </div>
    </section>
    {/* End Why Us Section */}
    </div>
  )
}

export default Whywechoose