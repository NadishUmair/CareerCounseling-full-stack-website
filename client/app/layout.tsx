"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from './redux/store'
import Navbar from "./Navbar/page";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <Provider store={store}>
     <html lang="en" >
      <body className='bg-white'>
        <ToastContainer/>
        <Navbar/>
        {children}</body>
    </html>
   </Provider>
  );
}
