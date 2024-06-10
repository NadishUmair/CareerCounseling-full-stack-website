"use client"
import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import FileBase64 from 'react-file-base64';

export default function Signup() {


     const [userdata,setuserdata]=useState({
      firstname:"",
      lastname:"",
      universityname:"",
      city:"",
      phone:"",
      postalcode:"",
      universityaddress:"",
      email:"",
      password:"",
      role:"",
      avatar:"",
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
       console.log(userdata);
       try {
            const sendAdmin=await axios.post("http://localhost:5500/admin/createadmin",userdata);
            toast.success('Signup successfuly')
       } catch (error:any) {
          toast.error(error.response.data.message)
       }
 
   }
   
  return (
    <>
    <form onSubmit={handlesubmitt} className="text-gray-600 body-font relative border-red-400 border">
  <div className="  py-10 border border-green-600">
    <div className="flex flex-col text-center w-full mb-6">
      <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">SignUp As admin</h1>
      
    </div>
    <div className="flex flex-col text-center w-full mb-6">
      <Link href={'/signup'} className="underline text-blue-600">SignUp As user?</Link>
      
    </div>
    <div className="w-[80%]  mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-[33%]">
          <div className="relative">
            <label htmlFor="firstname" className="leading-7 text-sm text-gray-600">First Name</label>
            <input type="text" value={userdata.firstname} id="firstname" name="firstname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required onChange={handlechange} />
          </div>
        </div>
        <div className="p-2 w-[33%]">
          <div className="relative">
            <label htmlFor="lastname" className="leading-7 text-sm text-gray-600">Last Name</label>
            <input type="lastname" value={userdata.lastname} id="lastname" name="lastname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} required/>
          </div>
        </div>
        {/* <div className="p-2 w-[33%]">
          <div className="relative">
            <label htmlFor="universityname"  className="leading-7 text-sm text-gray-600">universityname</label>
            <input type="universityname" id="universityname" value={userdata.universityname} name="universityname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div> */}
       
        {/* <div className="p-2 w-[33%]">
          <div className="relative">
            <label htmlFor="postalcode" className="leading-7 text-sm text-gray-600">Postalcode</label>
            <input type="postalcode" value={userdata.postalcode} id="postalcode" name="postalcode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div> */}
        <div className="p-2 w-[33%]">
          <div className="relative">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input type="city" value={userdata.city} id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div>
        <div className="p-2 w-[33%]">
          <div className="relative">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type="phone" value={userdata.phone} id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div>
        <div className="p-2 w-[33%]">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" value={userdata.email} id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div>
        <div className="p-2 w-[33%]">
          <div className="relative">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" value={userdata.password} id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div>
      
       
        <div className="p-2 w-1/2">
          <div className="">
            <label htmlFor="profile picture" className="leading-7 text-sm text-gray-600">Select Profile Picture</label>
         <div>
         <FileBase64 className='' type='file' multiple={false} onDone={({base64})=>setuserdata({...userdata,avatar:base64})}></FileBase64>
         </div>
          </div>
        </div>
        
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" type='submit'>Signup</button>
        </div>
        <div className="p-2 w-full    text-center">
        <p className="leading-normal my-5">
           Already have an account? <Link href='./login'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</form>
    
    </>

  )
}
