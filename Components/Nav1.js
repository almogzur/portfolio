import React from "react";
import Link from 'next/link';
import Image from "next/image";
import appNavRouts from "../appNavRouts";

function capitalizeFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
 }

export default async function Nav1 ( {/*porps*/ } ){
    
  let routsArr = await appNavRouts()

    return (
        <nav id="navbar1" >
      
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