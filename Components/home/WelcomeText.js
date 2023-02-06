import { motion } from "framer-motion"
import CircumIcon from "@klarr-agency/circum-icons-react"

export default function Welcome (){
    <div className='welcome'>
    <motion.div 
       initial={{ scale: 0 }}
       animate={{scale:1}}
       whileHover={{ scale: 1.05 }}
       transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 100,
                        }}
       >
   <CircumIcon name="view_list" size="150px" color={"#f2853c"}/>
   </motion.div>
   <p>Did You Know?
 JavaScript and Java are completely different languages, both in concept and design.
 JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.
 ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.
   </p>
 </div>
}