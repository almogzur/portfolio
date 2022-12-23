import fs from 'fs/promises'

export  default async  function pathsHndler (){

const files = await  fs.readdir('./app');

let navArray = []

navArray.push("home") //  home page will be first in line 


 // then sort a => b 
 
files.map( ( file ) =>{

     !file.includes(".js")  ?  navArray.push(file) :null
    
})

return navArray

}