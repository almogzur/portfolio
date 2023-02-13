import conlist from '../../public/conlist'
import Gallery from "./Gallery"

const conhtmllist = conlist.map((contry,index)=>{
   return <option value={contry.name} key={contry.code} >{contry.name}</option> 
  
})

export default function Dates (){

    return(
      <div id="wrapper">
    <div className=" dates text-center">
      <label htmlFor="from">From</label>
      <select id='from'>
        {conhtmllist}
        </select>
     <label htmlFor="to">To</label>
        <select id="to">
        {conhtmllist}
        </select>
        <br/>
      <label htmlFor="depart">Depart</label>
         <input type="date" id="depart" name="depart" readOnly
                value="2018-07-22"
                min="2023-01-01" max="2024-12-31"/> <rb/>
      <label htmlFor="return">Return</label>
         <input type="date" id="return" name="return" readOnly
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31" /> 
                    <br/>
      <label htmlFor='adults'>Adults</label>
         <select id="adults">
         <option value={0}>0</option>
         <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
         </select>    
        <label htmlFor='childrens'>Childrens</label> 
         <select id ='childrens'>
         <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
         </select>        
         <label htmlFor='flightclass'>Class</label>
         <select id='flightclass'>
          <option>First Class</option>
          <option>Bussnise</option>
          <option>Economy</option>
         </select>
         <br/>
   <button id="serch" className="text-center">Find Flight</button>
   
    </div> 
    <Gallery/> 
     </div>
)
}