'use client'
import Image from 'next/image'
import  {motion, AnimatePresence} from 'framer-motion'
import P1 from '../public/gallery/1.png'
import P2 from '../public/gallery/2.jpg'
import P3 from '../public/gallery/3.jpg'
import { useEffect, useState } from 'react'
const photosArry = [ P1 , P2 , P3 ]

export default function Gallery (){

    const [page,setPage]= useState(0);

    useEffect(()=>{
            console.log(page)
    },[page])
    
return (
    <div className='gallery'>

     <div className="next" onClick={() => setPage(prevPage=>prevPage+1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => setPage(prevPage=>prevPage-1)}>
        {"‣"}
      </div>
    </div>
)

}
