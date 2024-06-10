"use client"
import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '@/app/redux/action'
import jwt from 'jsonwebtoken'

export default function UpdateuserForm() {
        const dispatch=useDispatch();
        const [password,setPassword]=useState();

        const data=useSelector((state)=>state.custom.user)
        const role=data.role;
        console.log(localStorage)
     const [userdata,setuserdata]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        avatar:"",
        role:role
     })
  
      useEffect(()=>{
        setuserdata(data);
      },[data])

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
      
          try{
          
               const response=await axios.patch('http://localhost:5200/updateuser',userdata)
               console.log(response.data.message)
               const Token=localStorage.getItem('accessToken');
               const decodeToken=jwt.decode(Token);
                  const {email,role,id}=decodeToken;
                  const userResponse=await axios.post('http://localhost:5200/singleuser',decodeToken);
                  const userfound=userResponse.data.user;
               
                  dispatch(loginUser(userfound))
               
               toast.success('User Update successfuly')
            

          }catch(error:any){
                     console.log("error in signup",error)
                     toast.error(error.response.data.message)
          }
 
   }
   
  return (
    <>
    
    <form onSubmit={handlesubmitt} className="text-gray-600 body-font relative  p-2">
  <div className="container   ">
    <div className="flex flex-wrap flex-col text-center w-full md:mb-12 ">
      <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Update User</h1>
      
    </div>
    <div className="w-full  ">
      <div className="flex flex-wrap  ">
        <div className="w-full md:p-2 md:w-1/2">
          <div className="">
            <label htmlFor="firstname" className="leading-7 text-sm text-gray-600">First Name</label>
            <input type="text" value={userdata.firstname} id="firstname" name="firstname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 md:py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" required onChange={handlechange} />
          </div>
        </div>
        <div className="w-full md:p-2 md:w-1/2">
          <div className="relative">
            <label htmlFor="lastname" className="leading-7 text-sm text-gray-600">Last Name</label>
            <input type="lastname" value={userdata.lastname} id="lastname" name="lastname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700  md:py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} required/>
          </div>
        </div>
        <div className="md:p-2 w-full md:w-1/2">
          <div className="relative">
            <label htmlFor="email"  className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" value={userdata.email} name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 md:py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div>
       
        <div className="w-full md:p-2  md:w-1/2">
          <div className="relative">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type="phone" value={userdata.phone} id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 md:py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div>
       
        <div className="w-full md:p-2 md:w-1/2">
          <div className="">
            <label htmlFor="profile picture" className="leading-7 text-sm text-gray-600">Select Profile Picture</label>
           <div>
           <FileBase64 className='' type='file' multiple={false} onDone={({base64})=>setuserdata({...userdata,avatar:base64})}></FileBase64>
           </div>
          </div>
        </div>
        
        <div className="md:p-2 w-full mt-2">
          <button className="flex mx-auto text-white bg-purple-500 border-0 md:py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg" type='submit'>Update</button>
        </div>
        
      </div>
    </div>
  </div>
</form>
    
    </>

  )
}

