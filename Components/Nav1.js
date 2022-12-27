//server componenet 
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import '../styles/global.css'
import appNavRouts from "../appNavRouts";

function capitalizeFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
 }

export default async function Nav1 ( {/*porps*/ } ){
    
  let routsArr = await appNavRouts()

    return (
        <nav id="navbar1" >
         
        <Image className="nav1icon" src="/react.png"width={70}height={70} alt="" href="/" priority/> 

          {routsArr.map((rout)=>{
                    return   <Link 
                    className="link" 
                    key={ rout } 
                    href = { rout === "Home" ? "/" : rout } 
                    >{ capitalizeFirstLetter(rout)}
                     </Link>
                })
          }
       </nav>
    )

}