import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    age: null,
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <form className="d-flex flex-column card p-20">
        <input className="mb-20" type="text" placeholder="Nom" />
        <input className="mb-20" type="Number" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
