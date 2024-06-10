"use client"
import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import { useRouter } from 'next/navigation';



export default function Login() {

  const router=useRouter();
     const [userdata,setuserdata]=useState({
        email:"",
        accountType:""
        
     })
    
      const handlechange=((e:any)=>{
        const {name,value}=e.target;
          setuserdata(prev=>({
            ...prev,
            [name]:value
          }))
        
      })
   const handlesubmitt=async(e:any)=>{
       e.preventDefault();
       
      
          try{
               const response=await axios.post('http://localhost:5200/all/resetpassword',userdata)
              
             toast.success(response.data.message)
           
             const id=response.data.data;
            //  const id=response.
             router.push(`./products/${id}`)


          }catch(error:any){
                     console.log("error in signup",error)
                     toast.error(error.response.data.message)
          }
      
     
  
   }
   console.log(userdata);
   
  return (
    <>
    <form onSubmit={handlesubmitt} className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Login</h1>
     
    </div>
    <div className="lg:w-1/4  md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
       
     
        <div className="p-2 w-full ">
          <div className="">
            <label htmlFor="email"  className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" value={userdata.email} name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          <div className="">
            <label htmlFor="accountype"  className="leading-7 text-sm text-gray-600">Account Type</label>
          <div>
          <select className='w-full p-2 border ' name='accountType' value={userdata.accountType} onChange={handlechange}>
          <option value="customer">user</option>
            <option value="supplier">university</option>
          </select>
          </div>

          </div>
          <div className=" w-full mt-4 ">
          <button className=" w-full  text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg" type='submit'>Login</button>
        </div>
        </div>
       
      
        
       
        <div className="p-2 w-full    text-center">
        <p className="leading-normal my-5">
           Already have an account? <Link href='./signup'>Signup</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</form>
    
    </>

  )
}
