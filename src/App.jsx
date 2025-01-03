import { useState } from "react";

function App() {
  console.log("render");

  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(true);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center p-20">
      <button onClick={() => setShowCount(!showCount)}>showCount</button>
      <button onClick={handleClick} from="App">
        Submit <br />
        {showCount && <span>{count}</span>}
      </button>
    </div>
  );
}

export default App;
