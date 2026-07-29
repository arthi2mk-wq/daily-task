import { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect executed:", count);

    return () => {
      console.log("Cleanup:", count);
    };
  }, [count]);

  return (
    <>
    <h1>Use effect</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br /><hr />
    </>
  )
}export default Effect;