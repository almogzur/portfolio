'use client'
import  {motion, AnimatePresence} from 'framer-motion'
import P1 from '../../public/gallery/1.png'
import P2 from '../../public/gallery/2.jpg'
import P3 from '../../public/gallery/3.jpg'
import { useEffect, useState } from 'react'
import CircumIcon from "@klarr-agency/circum-icons-react"
const photosArry = [ P1 , P2 , P3 ];

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
     <div className='gallery-wrapper'>

        <div className='gallerymotion'>
        <button className = "btnleft" onClick = { upClick } ><CircumIcon name="square_chev_left" /> </button>
        <button className = "btnright"onClick={downClick} ><CircumIcon name="square_chev_right"/> </button>
        
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
     </div>
   </AnimatePresence>
</>

)

}
