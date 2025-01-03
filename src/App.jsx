import Button from "./Button";

function App() {
  function handleClick(e, from) {
    console.log("click ! : ", e, from);
  }

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center p-20">
      <Button onClick={handleClick} from="App" />
    </div>
  );
}

export default App;
