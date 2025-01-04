import { useState } from "react";
import Compteur from "./Compteur";

function App() {
  console.log("render App");

  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(true);

  function handleClick() {
    setCount(count + 1);
    console.log(count);

    setShowCount(!showCount);
    console.log(showCount);
  }

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center p-20">
      <button onClick={handleClick} from="App">
        Submit {showCount && <span> {count}</span>}
      </button>
      <Compteur />
    </div>
  );
}

export default App;
