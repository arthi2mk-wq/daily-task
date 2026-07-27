import React from "react";

function Leap(){
    const year=2026
    const hour=15
    return(
        <div style={{margin:"20px"}}>
            <p>To check given year is leap year or not</p>
        <h1> {year%4==0 ? "leap year":""}</h1>
        <h1>{year%4!=0? "not an leap year":" "}</h1>
        <hr />
        <h1>{hour<12?"morning":" "}</h1>
        <h1>{hour>18?"night":"good evening"} </h1>
        <hr />
        
        </div>
       
        
    )
}export default Leap;