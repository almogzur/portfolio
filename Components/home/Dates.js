export default function Dates (){
    return(<div className="text-center">
   
           <label for="start">Start date</label>
           <input type="date" id="start" name="trip-start" readOnly
                    value="2018-07-22"
                    min="2023-01-01" max="2024-12-31"/> <rb/>
           <label for="start">End date</label>
           <input type="date" id="start" name="trip-start" readOnly
                   value="2018-07-22"
                    min="2018-01-01" max="2018-12-31" /> 
                    <br/>
                    
   <button id="serch" className="text-center">Serch</button>
        </div> 
)
}