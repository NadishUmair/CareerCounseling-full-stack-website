import React, { useState } from 'react'
import UpdateuserForm from '../userupdateform/page';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';
export const PersonaData = (prop:any) => {
  const {user}=prop;
  const personaldata=user;
  console.log('personal',personaldata)
      const [update,setupdate]=useState(false);
  return (
    <div className='w-[100%] md:w-[100%]   md:flex flex-col justify-center items-center '>
      { update ? (
        <div>
          <UpdateuserForm/>
         
         
          <button onClick={()=>setupdate(false)} className='px-2 text-blue-600 hover:text-white  border border-blue-500 hover:bg-blue-500 flex items-center'>
          <FaArrowLeftLong />

           <h5 className='ml-2'> Back</h5>
            
            </button>
         
        </div>
      ):(
        <div className='  shadow-lg shadow-slate-500/30 border md:w-[70%]'>
        <div className='flex flex-col  items-center   p-4'>
           
           <div className='w-[30%]  rounded-lg  flex flex-col  items-center'>
             <img src={personaldata?.avatar} className='rounded-full w-[70px] h-[70px] md:w-[12rem] md:h-[12rem]' alt="" />
           </div>
           <div className='p-4  md:w-[60%]'>
        
           <div className='md:flex justify-between md:mt-8 '>
             <h3 ><span className='font-semibold mt-2  md:mt-0  mr-1'>First Name:</span>{personaldata?.firstname} </h3>
             <h3 className=''><span className=' mt-2  md:mt-0 font-semibold mr-2 '>Last Name:</span>{personaldata?.lastname} </h3>
           </div>
             <div className='md:flex justify-between md:mt-8'>
               <h3><span className='font-semibold mt-2  md:mt-0  mr-1 '>Role:</span>{personaldata?.role}</h3>
               <h3><span className='font-semibold mt-2  md:mt-0  mr-1 '>Phone:</span>{personaldata?.phone}</h3>
             </div>
             <div className='mt-2 md:mt-8'>
               <h3><span className='font-semibold mr-1 '>Email:</span>{personaldata?.email}</h3>
             </div>
             <div className='mt-4'>
               <Link  href="" className='  text-blue-600 dark:text-blue-500 hover:underline' onClick={()=>setupdate(true)}>Edit</Link>
             </div>
           </div>
             </div>
         </div>
        
        
        
      )

      }
    
    </div>
  

   
  )
}


