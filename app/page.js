//client componenet 
'use client'
import Image from 'next/image'
import { useState } from 'react'
import HomeSection from '../Components/home/HomeSection'
import Gallery from '../Components/home/Gallery'
import  Welcome from  '../Components/home/WelcomeText'
import DatesAndGallery from '../Components/home/Dates'
import '../styles/global.css'

export default function Page() {

return (
 <>
  <HomeSection/> 
  <Welcome/>
  <DatesAndGallery/>
  </>
    )

  }      