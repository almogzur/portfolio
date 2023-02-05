import { motion } from "framer-motion"
import Image from "next/image"
import sectionBG from '../../public/sitecover.jpg'

export default function HomeSection (){

    return <motion.div className="home"  
    initial={{ scale: 0.5 }}
    animate={{  scale: 0.8  }}
    whileHover={{ scale: 0.9 }}
    transition={{
     type: "spring",
     stiffness: 200,
     damping: 100,
   }}
    >
    <div  className='textblock'>  </div>
    <Image  
          className="scover" 
        src={sectionBG} 
        width={1200}
        height={400}
         alt=""
          />
 
    </motion.div>
}