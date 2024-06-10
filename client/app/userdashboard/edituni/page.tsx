import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FileBase64 from 'react-file-base64';
import { FadeLoader } from 'react-spinners';
import { toast } from 'react-toastify';
export const Edituniversity = (prop:any) => {
    const { universityId}=prop;
    
    const [loading,setloading]=useState(true);
    const [universityData,setuniversityData]=useState({
      title:"",
      category:"",
      price:"",
      discount:"",
      companyname:"",
      avatar:"",
      stock:"",
      description:"",
      // adminId:user._id
    })
        const fetchuniversity=async()=>{
           try {
                const response=await axios.get(`http://localhost:5200/singleuniversity/${universityId}`)
                const universitytoeidt=response.data.university;
                setuniversityData(universitytoeidt);
           } catch (error) {
            console.log(error);
           }finally{
                setloading(false);
           }
        }
        useEffect(()=>{
          fetchuniversity();
        },[])
console.log("universitydata",universityData);
    const handlechange=(e:any)=>{
      e.preventDefault();
     const {name,value}=e.target;
     setuniversityData(prev=>({
      ...prev,
      [name]:value,
     }))
    }
    const handlesubmitt=async(e:any)=>{
      e.preventDefault();
      try {
            const response=await axios.patch(`http://localhost:5200/updateuniversity/${universityId}`,universityData)
            toast.success('university updated successfuly')
      } catch (error) {
        console.log(error);
      }
       console.log(universityData);
    }
  return (
    <div className='md:px-8' >
 
       {
        loading ?(
         <div className='flex flex-col justify-center items-center h-[80vh]'>
          <div>
          <FadeLoader color="#b469e3" />
          </div>
         </div>
        ):(
          <form onSubmit={handlesubmitt} className="bg-gray-50 text-gray-600 body-font relative">
  <div className="">
    <div className="flex flex-col text-center w-full mb-2">
      <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Edit university</h1>
      
    </div>
    <div className=" ">
      <div className=" ">
        <div className="md:flex justify-between   ">
          <div className="md:w-[45%]">
            <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
            <input type="text" value={universityData.title} id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required onChange={handlechange} />
          </div>
          <div className="md:w-[45%]">
            <label htmlFor="category" className="leading-7 text-sm text-gray-600">Category</label>
           
           <select id="countries" value={universityData.startDate} name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handlechange}>
             <option className="p-2 hover:bg-blue-400" selected disabled>Select </option>
             <option className="p-2 hover:bg-blue-400" value="Home and Furniture">Home and Furniture</option>
             <option className="p-2 hover:bg-blue-400" value="Sports and Fitness">Sports and Fitness</option>
             <option className="p-2 hover:bg-blue-400" value="Health and Wellness">Health and Wellness</option>
             <option className="p-2 hover:bg-blue-400" value="Automotive">Automotive</option>
             <option className="p-2 hover:bg-blue-400" value="Baby and Kids">Baby and Kids</option>
             <option className="p-2 hover:bg-blue-400" value="Food and Beverages">Food and Beverages</option>
             <option className="p-2 hover:bg-blue-400" value="Toys and Games">Toys and Games</option>
             <option className="p-2 hover:bg-blue-400" value="Apparel and Accessories">Apparel and Accessories</option>
             <option className="p-2 hover:bg-blue-400" value="Electronics">Electronics</option>
             <option className="p-2 hover:bg-blue-400" value="Jewelry and Watches">Jewelry and Watches</option>
             <option className="p-2 hover:bg-blue-400" value="Education and Learning">Education and Learning</option>
            </select>
          </div>
        </div>
        <div className="md:flex justify-between ">
          <div className="md:w-[45%]">
            <label htmlFor="price"  className="leading-7 text-sm text-gray-600">Start Date</label>
            <input type="date" value={universityData.startDate} min="0" id="price"  name="price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          <div className="md:w-[45%]">
            <label htmlFor="stock" className="leading-7 text-sm text-gray-600">Last Date</label>
            <input type="date" value={universityData.lastDate}  id="stock" name="stock" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
        </div>
        <div className="md:flex justify-between ">
          {/* <div className="md:w-[45%] ">
            <label htmlFor="companyname" className="leading-7 text-sm text-gray-600">CompanyName</label>
            <input type="text" value={universityData.companyname}  id="companyname" name="companyname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div> */}
          <div className="md:w-[45%] ">
            <label htmlFor="profile picture" className="leading-7 text-sm text-gray-600">Select Profile Picture</label>
            <div>
            <FileBase64 className='' value={universityData.avatar} type='file' multiple={false} onDone={({base64})=>setuniversityData({...universityData,avatar:base64})}></FileBase64>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between ">
          <div className="md:w-[45%] ">
            <label htmlFor="description" className="leading-7 text-sm text-gray-600">Discount</label>
            <input type="number" min="0" value={universityData.discount} id="discount" name="companyname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange}/>
          </div>
          <div className="md:w-[45%] ">
            <label htmlFor="profile picture" className="leading-7 text-sm text-gray-600">Enter Small Description</label>
           <div>
           <textarea  value={universityData.description}className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="description" id="" cols="55" rows="2" onChange={handlechange}></textarea>
           </div>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg" type='submit'>Update Changes</button>
        </div>
        <div className="p-2 w-full    text-center">
        </div>
      </div>
    </div>
  </div>
</form>
        )
       } 

    
    </div>
  )
}


    












 