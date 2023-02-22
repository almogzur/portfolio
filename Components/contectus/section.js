import Image from "next/image"
import cover from '../../public/contectuscover.jpg'
export default function Section (){
  
    return(
 <>
    <div>
    <Image
      src={cover}
      style={{
        zIndex:"0",
        width:"100vw",
        height:"65vh"
        }}
      alt="Picture of the author"
    />
     </div>
    <div> watsap linnk</div>
 </>

    )
}