import { useRef, useState } from "react";

function App() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>State: {count}</h2>
      <h2>Ref: {countRef.current}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase State
      </button>

      <button
        onClick={() => {
          countRef.current++;
          console.log(countRef.current);
        }}
      >
        Increase Ref
      </button>
    </>
  );
}
export default App;