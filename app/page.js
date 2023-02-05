//client componenet 
'use client'
import Image from 'next/image'
import { useState } from 'react'
import HomeSection from '../Components/home/HomeSection'
import Gallery from '../Components/home/Gallery'
import Cards from '../Components/home/Cards'
import '../styles/global.css'
import '../styles/card.css'


export default function Page() {

return (
 <>
  <HomeSection/> 
  <Gallery/>
  <Cards/>
  </>
    )

  }      