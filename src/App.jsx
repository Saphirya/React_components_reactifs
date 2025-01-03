function App() {
  function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log("click ! : ", e);
  }

  function handleInput(e) {
    console.log("input ! : ", e);
  }

  function handleFocus(e) {
    console.log("focus ! : ", e);
  }

  function handleClickDiv(e) {
    console.log("div click ! : ", e);
  }
  return (
    <div
      onClick={handleClickDiv}
      className=" d-flex flex-column justify-content-center align-items-center p-20"
    >
      <form action="">
        <button onClick={handleClick} className="mb-20">
          Submit
        </button>
      </form>

      <input onFocus={handleFocus} type="text" onInput={handleInput} />
    </div>
  );
}

export default App;
