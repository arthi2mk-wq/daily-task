import { useState } from "react";
function Change(){
     const [Color, setColor] = useState("red");

  
    return(
        <div>
        <h1 className={Color} style={{padding:"20px"}}>change the color</h1>
        <button onClick={ () =>setColor("blue")} style={{margin:"20px"}}>click</button>
        </div>
   );
    
}
export default Change;
