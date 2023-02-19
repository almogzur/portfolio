'use client'
import  {motion, AnimatePresence} from 'framer-motion'

import P4 from '../../public/gallery/vic1.jpg'
import P5 from '../../public/gallery/vic2.jpg'
import P6 from '../../public/gallery/vic3.jpg'

import { useEffect, useState } from 'react'
import CircumIcon from "@klarr-agency/circum-icons-react"
const photosArry = [ P4 , P5 , P6 ];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 300 : 0,
      opacity: 0
    };
  }
};


export default function Gallery (){

  const [currentPhoto , setCurrentPhoto ] = useState(0)

  const [direction,setDirection] = useState(0)

  const upClick = () => { 
    setCurrentPhoto(currentPhoto < photosArry.length-1? currentPhoto + 1 : 0 ) 
    setDirection(1)
  }

  const downClick = () => { 
    setCurrentPhoto( currentPhoto >= 1 ? currentPhoto - 1 :photosArry.length-1 )
    setDirection(-1)
   }

useEffect(()=>{

     console.log(currentPhoto)

  },[currentPhoto])

return (
<>
   <AnimatePresence initial={"enter"} custom={direction} >
        <div className='gallerymotion'>

        <button className = "btnleft" onClick = { upClick } ><CircumIcon name="paperplane" size={90} /> </button>
        <button className = "btnright"onClick={downClick} ><CircumIcon name="paperplane" size={90} /> </button>
        
          <motion.img 
             key={currentPhoto}
             src={photosArry[currentPhoto].src}
             style={{  borderRadius:"0px" , width:"30vw"}}
             custom={direction}
             variants={variants}
             initial="enter"
             animate="center"
             exit="exit"
             transition={{
                  x: { type: "spring", stiffness: 300, damping: 110 },
                  opacity: { duration: 1 },
                  zIndex:0
               }}
          /> 
       
     </div>
   </AnimatePresence>
</>

)

}
