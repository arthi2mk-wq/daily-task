import React from "react";
import { useState } from "react";



function A(){
     const [text, setText] = useState("");
    const eventchange=(event:React.ChangeEvent<HTMLInputElement>)    =>{
        setText(event.target.value);
    };
    return(
        <div style={{height:"180px",width:"300px",margin:"20px",boxShadow:"2px 2px 2px grey,",padding:"40px",backgroundColor:"lightgrey"}}>
        <input type="text" onChange={eventchange} />
         <h2>You Enter:{text}</h2>
         
       
        </div>
        

    )
}export default A;
