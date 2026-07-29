import { useState } from "react";
function Counter(){
    const [count,setcount]=useState(0)
    const increase = () => {
    setcount((prev) => prev + 5);
    
  };
  const decrease = ()=>{
        setcount((prev) => prev-5)
    }
    
    return(
        <div>
            <h4>count increase using usestate</h4>
            <h4>count:{count}</h4>
            <button onClick={()=>{setcount(count+1)
                setcount(count-1)
                setcount(count+2)
            }
         }style={{margin:'10px'}}>+1</button>
            <button onClick={()=>setcount(count-1)} style={{margin:'10px'}}>-1</button>
            <button onClick={increase}style={{margin:'10px'}}>+5</button> 
            <button onClick={decrease}style={{margin:'10px'}}>-5</button>
            <hr />
        </div>
    )

}export default Counter;