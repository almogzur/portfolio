export default function Dates (){
    return(<div className=" dates text-center">
   <label htmlFor="dropdown">From</label>
   <select id="dropdown">
  <option value="one">one</option>
  <option value="two">two</option>
  </select>
  <label htmlFor="dropdown">To</label>
   <select id="dropdown">
  <option value="one">one</option>
  <option value="two">two</option>
  </select>
           <label htmlFor="depart">Depart</label>
           <input type="date" id="start" name="depart" readOnly
                    value="2018-07-22"
                    min="2023-01-01" max="2024-12-31"/> <rb/>
           <label htmlFor="return">Return</label>
           <input type="date" id="start" name="return" readOnly
                   value="2018-07-22"
                    min="2018-01-01" max="2018-12-31" /> 
                    <br/>
                    
   <button id="serch" className="text-center">Serch</button>
   
        </div> 
)
}