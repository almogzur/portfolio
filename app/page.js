//client componenet 
'use client'
import Image from 'next/image'

import  {motion} from 'framer-motion'

export default function Page() {

    return (

   <motion.div  >
     <section>

       <Image  id="section-cover" src="/section.jpg" alt="" width={200} height="100" />

    </section>
   </motion.div>
    )

  }      