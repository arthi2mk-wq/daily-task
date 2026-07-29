import { useState } from "react";
function Name(){
    const [person,setperson]=useState({firstname:"",lastname:""})
    
    return(
        <div>
            <h2>usestate with objects</h2>
            <input type="text" onChange={( e ) =>setperson({...person,firstname:e.target.value}) } placeholder="    enter Firstname" />
             <input type="text" onChange={( e ) =>setperson({...person,lastname:e.target.value}) } placeholder="    enter Lastname" />
            
             <p>firstname:{person.firstname}</p>
             <p>LastName:{person.lastname}</p>
        </div>
    )
}export default Name;