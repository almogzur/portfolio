import conlist from '../../public/conlist'
import { useState } from 'react'
const conhtmllist = conlist.map((contry)=>{
   return <option value={contry.name} key={contry.code} >{contry.name}</option> 
  
})
export default function Dates ( ){

    const [isFlightBack , setIsFlightBack ] = useState(0)

    handleChange(e) {
      setIsFlightBack(e.target.value)
    }
    isFlightBack === 0 ? null : null
      return(
       <div className=" dates ">
        <select onChange={handleChange}>
      <option value={0}>One Way</option>
      <option value={1}>Return</option>
        </select> <br/>
        <select id='from'>
            <option value="" disabled selected hidden>Select Destination</option>
          {conhtmllist}
        </select>
        <select id="to">
  <option value="" disabled selected hidden>Select Return</option>
  {conhtmllist}
        </select> <br />
        <input type="date" 
          id="depart" 
          name="depart" 
          value="2018-07-22"
          min="2023-01-01"
          max="2024-12-31"    
           /><rb />
        <input type="date" 
         id="return" 
         name="return"
         value="2018-07-22"
         min="2018-01-01"
         max="2018-12-31" 
           /><br/>
        <select id="adults">
   <option value="" disabled selected hidden>Adults</option>
   <option value={0}>0</option>
   <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
        </select>    
        <select id ='childrens'>
   <option value="" disabled selected hidden>Childrens</option>
   <option value={0}>0</option>
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
        </select>        
        <select id='flightclass'>
   <option value="" disabled selected hidden>Flightclass</option>
    <option>First Class</option>
    <option>Bussnise</option>
    <option>Economy</option>
        </select><br/>
        <button 
          id="serch"
          className="text-center"
        >Find Flight</button>
</div> 
    )
   
}