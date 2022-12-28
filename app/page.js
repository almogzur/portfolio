//client componenet 
'use client'
import Image from 'next/image'
import { useState } from 'react'
import HomeSection from '../Components/HomeSection'
import Gallery from '../Components/Gallery'
import Cards from '../Components/Cards'
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