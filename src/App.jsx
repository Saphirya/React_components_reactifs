import { useState } from "react";
import Compteur from "./Compteur";

function App() {
  console.log("render App");

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center p-20">
      <button onClick={handleClick} from="App">
        Submit
      </button>
      <Compteur count={count} />
    </div>
  );
}

export default App;
