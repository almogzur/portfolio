import { motion } from "framer-motion"
import Image from "next/image"
import sectionBG from '../public/section.png'

export default function HomeSection (){

    return <motion.div className="home"  
    initial={{ scale: 0 }}
    animate={{  scale: 0.9  }}
    whileHover={{ scale: 1.01 }}
    transition={{
     type: "spring",
     stiffness: 260,
     damping: 100,
   }}
    >
    <div  className='textblock'> Orange </div>
    
        <Image  
          className="scover" 
        src={sectionBG} 
        width={1200}
        height={500}
         alt=""
          />
 
    </motion.div>
}