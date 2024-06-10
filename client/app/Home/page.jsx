"use client"
import React from 'react'
import HeroSection from "../HeroSection/heroSection"
import MainSection from "../mainsecton/page"
import Universities from '../Institutes/page'
import MarketDemands from '../marketDemands/page'

export default function Home () {
  
  return (
    <>
     <HeroSection/>
     <MainSection/>
     <Universities/>
 
     <MarketDemands/>
    
    </>
  )
}
