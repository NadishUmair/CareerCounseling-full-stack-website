import axios from 'axios';
import React, { useState } from 'react'
import FileBase64 from 'react-file-base64';
import { toast } from 'react-toastify';
export const CreateInstitute = (prop:any) => {
    const {user}=prop;
    const userRole=user.role;
   
    const [InstituteData,setInstituteData]=useState({
      title:"",
      category:"",
      startDate:"",
      InstituteLogo:"",
      instituteType:"",
      lastDate:"",
     description:"",
      adminId:user._id,
      degreelevel:"",
      city:""
      
    })
    const handlechange=(e:any)=>{
      e.preventDefault();
     const {name,value}=e.target;
     setInstituteData(prev=>({
      ...prev,
      [name]:value,
     }))
    }
    const handlesubmitt=async(e:any)=>{
      e.preventDefault();
      try {
            const response=await axios.post('http://localhost:5500/AddInstitute',InstituteData)
            toast.success('Institute added successfuly')
      } catch (error) {
        console.log(error);
      }
       console.log(InstituteData);
    }
  return (
    <div className='md:px-8'>
      { userRole  === "admin" ?(
        
<form onSubmit={handlesubmitt} className="text-gray-600 body-font relative">
  <div className="">
    <div className="flex flex-col text-center w-full mb-2">
      <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Create Institute</h1>
      
    </div>
    <div className=" ">
      <div className=" ">
        <div className="md:flex justify-between   ">
          <div className="md:w-[45%]">
            <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
            <input type="text" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required onChange={handlechange} />
          </div>
          <div className="md:w-[45%]">
            <label htmlFor="instituteType" className="leading-7 text-sm text-gray-600">Institute Level</label>
           
           <select name='instituteType' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handlechange}>
             <option className="p-2 hover:bg-blue-400" selected disabled>Select</option>
             <option className="p-2 hover:bg-blue-400" value="college">College</option>
             <option className="p-2 hover:bg-blue-400" value="university">University</option>
           
            </select>
          </div>
        </div>
        <div className="md:w-[45%]">
            <label htmlFor="category" className="leading-7 text-sm text-gray-600">Summer/Fall</label>
           
           <select id="countries" name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handlechange}>
             <option className="p-2 hover:bg-blue-400" selected disabled>Select </option>
             <option className="p-2 hover:bg-blue-400" value="summer">Summer</option>
             <option className="p-2 hover:bg-blue-400" value="fall">Fall</option>
           
            </select>
          </div>
        <div className="md:flex justify-between ">
          <div className="md:w-[45%]">
            <label htmlFor="startDate"  className="leading-7 text-sm text-gray-600">Start Date</label>
            <input type="date"  id="startDate"  name="startDate" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          <div className="md:w-[45%]">
            <label htmlFor="lastDate" className="leading-7 text-sm text-gray-600">Last Date</label>
            <input type="date"  id="lastDate" name="lastDate" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div>
        <div className="md:flex justify-between ">
        <div className="md:w-[45%]">
            <label htmlFor="discipline" className="leading-7 text-sm text-gray-600">Discipline</label>
            <input type="discipline"  id="discipline" name="discipline" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          <div className="md:w-[45%]">
            <label htmlFor="degreelevel" className="leading-7 text-sm text-gray-600">Degree Level</label>
            <input type="degreelevel"  id="degreelevel" name="degreelevel" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
       
        </div>
        <div className="md:flex justify-between ">
        <div className="md:w-[45%] ">
            <label htmlFor="InstituteLogo" className="leading-7 text-sm text-gray-600">Select Institute Logo</label>
            <div>
            <FileBase64 className='' type='file' multiple={false} onDone={({base64})=>setInstituteData({...InstituteData,InstituteLogo:base64})}></FileBase64>
            </div>
          </div>
          <div className="md:w-[45%] ">
            <label htmlFor="description" className="leading-7 text-sm text-gray-600">Enter Small Description</label>
           <div>
           <textarea className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="description" id="" cols="55" rows="2" onChange={handlechange}></textarea>
           </div>
          </div>
         
        </div>
        <div className="md:w-[45%]">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input type="city"  id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg" type='submit'>Create Institute</button>
        </div>
        <div className="p-2 w-full    text-center">
        </div>
      </div>
    </div>
  </div>
</form>
      ):(
        <h1>You need to login as admin...</h1>
      )
      }
    </div>
  )
}


    












 