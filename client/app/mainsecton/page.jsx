"use client"

import './main.css'

const Main = () => {

  return (
    
      <div className='flex  md:flex-row flex-col justify-between ' id='mainsection'>
        
        <div className='md:w-[60%] p-2  md:flex  justify-between mt-2 '>
  <div className='flex flex-col'>
    <div className='flex flex-col p-4'>
      <div className='w-16'>
        <img src={'./Assets/images/career.png'} alt="Career Counseling" />
      </div>
      <h5 className='font-bold mt-4 text-lg text-black-300'>Career Counseling</h5>
      <p className='mt-2 text-gray-600'>Receive personalized guidance from experienced career counselors to help you choose the right career path based on your interests, skills, and market trends.</p>
    </div>
    <div className='flex flex-col mt-4 p-4'>
      <div className='w-16'>
        <img src={'./Assets/images/college.png'} alt="College Information" className='' />
      </div>
      <h5 className='font-bold mt-4 text-lg'>College Information</h5>
      <p className='mt-2 text-gray-600'>Access comprehensive information on various colleges, including admission requirements, courses offered, campus facilities, and student life.</p>
    </div>
  </div>
  <div className='flex flex-col'>
    <div className='flex flex-col p-4'>
      <div className='w-16'>
        <img src={'./Assets/images/universities.png'} alt="Universities Information" className='' />
      </div>
      <h5 className='font-bold mt-4 text-lg'>Universities Information</h5>
      <p className='mt-2 text-gray-600'>Explore detailed profiles of universities worldwide, featuring insights into academic programs, research opportunities, and campus culture.</p>
    </div>
    <div className='flex flex-col mt-4 p-4'>
      <div className='w-16'>
        <img src={'./Assets/images/market.png'} alt="Market Demands" className='' />
      </div>
      <h5 className='font-bold mt-4 text-lg'>Market Demands</h5>
      <p className='mt-2 text-gray-600'>Stay updated on the latest job market trends and demands to make informed decisions about your education and career path.</p>
    </div>
  </div>
</div>

       
         
        <div  className='md:w-[40%]  md:relative  flex  justify-center'>
      <div className=' w-full h-full flex justify-center absolute overflow-hidden '>
      <div class='  animated-blue h-[100%] '>
      <img src={'./Assets/images/animated_icon_2.png'} alt="" class='h-full' />
      </div>
          <div className='absolute w-full top-[50%]   '>
            <div className='animated-yellow'>
              <img src={'./Assets/images/animated_icon_1.png'} alt="img" className='' />
            </div>
          </div>
      </div>
  
          <div className='mt-4 w-[80%]  md:w-[65%] md:mt-0 bg-white md:absolute md:top-[-7rem] z-10 p-4 flex items-center ' id='contactform-section'>
            <form action="" className=' w-full   h-full'>
              <h2 className='text-center font-bold text-2xl mt-2'>Contact Form</h2>
              <div className='mt-8'>
                <input className='p-3 w-full border border-gray-300 rounded enteries' type="text" placeholder='Name' />
              </div>
              <div className='mt-8'>
                <input className='p-3 w-full border border-gray-300 rounded enteries' type="text" placeholder='Email' />
              </div>
              <div className='mt-8'>
                <input className='p-3 w-full border border-gray-300 rounded enteries' type="text" placeholder='Phone' />
              </div>
              <div className='mt-8'>
                <select className='p-3 w-full border border-gray-300 rounded enteries opt' name="education" id="" placeholder='Education'>
                  <option value="">Matric</option>
                  <option value="">Fsc</option>
                  <option value="">BS</option>
                </select>
              </div>
              <div className='mt-8 flex justify-center'>
                <button className='p-3 formbtn bg-blue-700 hover:bg-white hover:border hover:border-blue-700 hover:text-black '>Submit Now</button>
              </div>
            </form>
          </div> 
        </div>
      </div>
    );
};

export default Main;
