//server componenet 
import React from "react";
import Link from 'next/link';
import '../styles/global.css'
import pathsHndler from "../pathsHndler";

export default async function Nav1 ( {/*porps*/ } ){
    
  let linksArr = await pathsHndler()

 
    return (
        <nav id="nav1" >
                {linksArr.map((link)=>{
                   return   <Link key={ link } href = { link === "home" ? "/" : link } >{ link }</Link>
                })}
       </nav>
    )

}