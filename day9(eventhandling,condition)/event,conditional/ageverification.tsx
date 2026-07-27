import React, { useState } from "react";
import { text } from "stream/consumers";
function Verify(){
    const[age,setage]=useState("")
    const ageverify=(event:React.ChangeEvent<HTMLInputElement>) => {
        setage("event.target.value")
    }
    return(
        <div>
            <input type="text" placeholder="   Enter number" onChange={ageverify} /><br />
            {Number(age)>=18 ? "eligible for vote":"not eligible for vote"}
        </div>
    )
}export default Verify;