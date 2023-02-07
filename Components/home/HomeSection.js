import { motion } from "framer-motion"
import Image from "next/image"
import sectionBG from '../../public/sitecover.jpg'

export default function HomeSection (){

    return(<div  className='textblock'>
    
    <Image  
          className="scover" 
        src={sectionBG} 
        height={400}
        alt=""
          />
   </div>
 )

}