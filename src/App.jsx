import "./App.css";

function App() {
  function handleClick() {
    console.log("click !");
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-20">
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
