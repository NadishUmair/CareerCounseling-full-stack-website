"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileBase64 from 'react-file-base64';
import Link from 'next/link';

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [avatar, setAvatar] = useState("");

  const onSubmit = async (data) => {
    try {
      // Include the avatar in the form data
      data.avatar = avatar;
      const response = await axios.post('http://localhost:5500/user/creatuser', data);
      console.log(response.data.message);
      toast.success('Signup successful');
    } catch (error) {
      console.error("Error in signup", error);
      toast.error(error.response.data.message);
    }
  };

  const handleFileInputChange = ({ base64 }) => {
    setAvatar(base64);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="text-gray-600 body-font relative bg-slate-100">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">SignUp As user</h1>
          </div>
          <div className="flex flex-col text-center w-full mb-6">
            <Link href={'./adminsignup'} className="underline text-blue-700">SignUp As admin ?</Link>
          </div>
          <div className="lg:w-[40%] md:w-2/3 p-8 shadow-xl bg-gray-50 rounded-lg mx-auto border">
            <div className=" -m-2">
              <div className=" ">
                <div className="relative">
                  <label htmlFor="firstname" className="leading-7 text-sm text-gray-600">First Name</label>
                  <input type="text" {...register("firstname", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  {errors.firstname && <span className="text-red-500">First name is required</span>}
                </div>
              </div>
              {/* Repeat similar pattern for other fields */}
              {/* Last Name */}
              <div className=" ">
                <div className="relative">
                  <label htmlFor="lastname" className="leading-7 text-sm text-gray-600">Last Name</label>
                  <input type="text" {...register("lastname", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  {errors.lastname && <span className="text-red-500">Last name is required</span>}
                </div>
              </div>
              {/* Email */}
              <div className=" ">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" {...register("email", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
              </div>
              {/* Password */}
              <div className="">
                <div className="relative">
                  <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                  <input type="password" {...register("password", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  {errors.password && <span className="text-red-500">Password is required</span>}
                </div>
              </div>
              {/* Phone */}
              <div className=" ">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                  <input type="tel" {...register("phone", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  {errors.phone && <span className="text-red-500">Phone is required</span>}
                </div>
              </div>
              {/* Profile Picture */}
              <div className=" mt-2">
                <div className="">
                  <label htmlFor="profile-picture" className="leading-7 text-sm text-gray-600">Select Profile Picture</label>
                  <div>
                  <FileBase64 className='' type='file' accept='image/*' multiple={false} onDone={handleFileInputChange}></FileBase64>

                  </div>
                </div>
              </div>
              {/* Submit Button */}
              <div className=" w-full mt-2">
                <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg" type='submit'>Signup</button>
              </div>
              {/* Login Link */}
              <div className=" w-full text-center">
                <p className="leading-normal my-5">
                  Already have an account? <Link href='./login'>Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
