import "./App.css";

function App() {
  function handleClick(e) {
    console.log("click ! : ", e);
  }

  function handleInput(e) {
    console.log("input ! : ", e);
  }

  function handleFocus(e) {
    console.log("focus ! : ", e);
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-20">
      <button onClick={handleClick} className="mb-20">
        Submit
      </button>
      <input onFocus={handleFocus} type="text" onInput={handleInput} />
    </div>
  );
}

export default App;
