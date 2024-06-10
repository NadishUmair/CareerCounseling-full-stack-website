"use client"
import Link from 'next/link'
import React, {  useEffect, useRef, useState } from 'react'
import {  useDispatch, useSelector } from "react-redux";
import './logout.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { logoutUser } from '../redux/action';
import { useRouter } from 'next/navigation';
import { FaShoppingCart } from "react-icons/fa";


export default function Navbar() {
  const router=useRouter();
const [Show,setShow]=useState(false)
const [loginuser,setloginuser]=useState();
const dropdownref=useRef(null)
const dispatch=useDispatch();
const user = useSelector((state) => state.custom.user);
console.log('user state',user)

  const handlelogout=()=>{
   
      localStorage.removeItem('accessToken');
      
    dispatch(logoutUser());
 
   window.location.replace('./login')
 
    
}  


   
useEffect(()=>{
      function handledropdownref(event:any){
        if(dropdownref.current && !dropdownref.current.contains(event.target)){
          setShow(false);
        }
        }

        document.addEventListener("mousedown",handledropdownref)
        return ()=>{
         document.removeEventListener("mousedown",handledropdownref)
        }
},[dropdownref])



  return (
    <div className=''>

         <header className="text-gray-600 body-font " router={router}>
  <div className="container w-full mx-auto md:flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="md:flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <span className="ml-3 text-xl">Career Counseling</span>
    </a>
    <nav className="inline-block md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	md:flex flex-wrap items-center text-base justify-center">
      <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
    </nav>

   <div className='  flex justify-between items-center w-[7rem] mt-2  md:mt-0' >
    <div className='w-[75%] text-center flex flex-col justify-center    h-12 '>

  
    { user ?( 
      
      <div className='w-full h-full relative flex items-center ' id='login-container' ref={dropdownref}>
         <Link href="" onClick={()=>setShow(!Show)}>
        <div className='flex items-center'>
        <div className='h-[35px] w-[35px]  userimg  rounded-2xl' style={{backgroundImage:`url(${user.avatar})`}} id='loginbox'> 
       
        </div>
        <div className='self-end  flex items-center'>
           <IoMdArrowDropdown className='text-2xl' />
        </div>
        </div>
        </Link>
       { Show &&
         <div className='w-[200px] left-[-7rem] z-10 absolute top-[3rem]  md:top-[4.3rem] bg-slate-50 shadow-lg shadow-slate-300/50 p-4' id='menu-container'>
         <ul>
          <li>
      <Link onClick={()=>setShow(false)} href={'../userdashboard'} className='text-white font-bold bg-green-400 px-2 py-1 shadow-lg shadow-green-300/50 '>My DashBoard</Link>
          </li>
           <li className='mt-4'>
           
          <Link onClick={handlelogout} href={''} className="text-red-400  shadow-lg bg-slate-200 px-2 py-1  title-font  text-center    font-medium items-center md:mb-0">
          Logout
         </Link>

           </li>
         </ul>

        </div>
       }
      
     
        
      </div>
      ):(
        <div className=' '>
  <Link href={'../login'} className="bg-blue-700 shadow-lg shadow-blue-700/50 px-2 py-1  title-font  text-center    font-medium items-center text-white  md:mb-0">
Login
</Link>
</div>
      )
    }
     </div>
   </div>
  </div>
</header>
    </div>
  )
}
