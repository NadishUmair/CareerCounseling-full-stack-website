"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function page() {
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const { token } = useParams()
    

    const handleResetPassword = async (e: any) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:5000/api/v1/auth/reset-password/${token}`, { password })
            // setMessage("")
            toast.success("Password reset successfully")
        } catch (error) {
            console.log("Error", error)
        }
    }
    return (
        <form>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex w-1/3 mx-auto flex-col mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Reset Password</h1>
                    </div>
                    <div className="w-1/3 mx-auto">
                        <div className="flex justify-center flex-wrap -m-2">
                            <div className="fields w-full">
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">New Password</label>
                                        <input type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 w-full mt-2">
                                <button className="flex justify-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 w-full rounded text-lg" onClick={handleResetPassword}>Submit</button>
                            </div>
                            <p>{message}</p>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    )
}
