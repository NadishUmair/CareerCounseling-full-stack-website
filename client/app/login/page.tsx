"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import jwt from 'jsonwebtoken'
import { loginUser } from '../redux/action'

export default function Login() {

  const dispatch = useDispatch();
  const router = useRouter();

  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
    role: ""
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserdata(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const alreadyexist = localStorage.getItem('user');

  const handlesubmitt = async (e) => {
    e.preventDefault();
    console.log(userdata);

    if (!userdata.email || !userdata.password || !userdata.role) {
      toast.error("All fields are required");
      return;
    }

    try {
      if (!alreadyexist) {
        const response = await axios.post('http://localhost:5500/login', userdata);
        toast.success(response.data.message);
        const token = response.data.token;
        localStorage.setItem("accessToken", token);
        const decodeToken = jwt.decode(token);
        const { email, role, id } = decodeToken;
        const userResponse = await axios.post('http://localhost:5500/singleuser', { id,role });
        const userfound = userResponse.data.user;
        dispatch(loginUser(userfound));
        router.push('./');
      } else {
        alert('User already logged in');
      }
    } catch (error) {
      console.log("Error in login", error);
      toast.error(error.response?.data?.msg || "Login failed");
    }
  };

  return (
    <>
      <form onSubmit={handlesubmitt} className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Login</h1>
          </div>
          <div className="lg:w-1/3 md:w-1/2 mx-auto">
            <div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" value={userdata.email} name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} />
              </div>
              <div className="relative mb-4">
                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                <input type="password" id="password" value={userdata.password} name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} />
              </div>
              <div className="relative mb-4">
                <label htmlFor="role" className="leading-7 text-sm text-gray-600">Login As</label>
                <select name="role" className="p-2 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" value={userdata.role} onChange={handlechange}>
                  <option value="" disabled>Select Type</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button className="mx-auto w-full text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" type="submit">Login</button>
              <div className="p-2 w-full mt-4 flex justify-between text-center">
                <p>Already have an account? <Link href='./signup' className='text-blue-500'>Signup</Link></p>
                <Link href='./forgotpassword' className='text-blue-500'>Forget Password?</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
