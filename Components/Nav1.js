//server componenet 
import React from "react";
import Link from 'next/link';
import '../styles/global.css'
import appNavRouts from "../appNavRouts";

function capitalizeFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
 }

export default async function Nav1 ( {/*porps*/ } ){
    
  let routsArr = await appNavRouts()

    return (
        <nav id="navbar1" >
                {routsArr.map((rout)=>{
                   return   <Link key={ rout } href = { rout === "Home" ? "/" : rout } > { capitalizeFirstLetter(rout)} </Link>
                })}
       </nav>
    )

}