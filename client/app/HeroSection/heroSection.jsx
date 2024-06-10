"use client"
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Herocontent from './herocontent'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './herosection.css'

const HeroSection = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [show, setShow] = useState(true);
useEffect(()=>{
  localStorage.removeItem('token')
},[])
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div id="herosection" className="flex flex-col justify-center overflow-hidden   m-0 " >
      <Slider {...settings}   className='m-0'>
        
        {
          Herocontent.map((item) => (
           
            <div key={item.id}  className="h-[60vh]   ">
              <div className="text-center  h-full 00  w-75 flex flex-col justify-center">
                <h1 className="font-bold text-5xl">{item.heading}</h1>
                <h4 className="px-2 text-xl font-light mt-2">{item.paragraph}</h4>
                <div className="mt-4">
                  <a href="#" className=" text-md rounded-full  bg-blue-600 hover:bg-white hover:border-2 hover:border-blue-700 hover:text-black py-2 px-3 " >Show More</a>
                </div>
              </div>
            </div>
          
          ))
        }
        
      </Slider>

      
    </div>
  );
};

export default HeroSection;
