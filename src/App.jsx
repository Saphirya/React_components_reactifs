import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    age: null,
  });

  const [userList, setUserList] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    const newUserList = [...userList, { ...user }];
    setUserList(newUserList);
    console.log(newUserList);
  }

  function handleClickDeleteUser(index) {
    const newUserList = userList.filter((u, i) => i !== index);
    setUserList(newUserList);
  }

  function handleClickSort() {
    const newUserList = [...userList];
    newUserList.sort((a, b) => a.name.localeCompare(b.name));
    setUserList(newUserList);
  }
  function handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "age") {
      value = +value;
    }
    setUser({ ...user, [name]: value, [e.target.name]: e.target.value });
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <form className="d-flex flex-column card p-20 mb-20">
        <input
          onInput={handleInput}
          className="mb-20"
          type="text"
          placeholder="Nom"
          name="name"
        />
        <input
          name="age"
          onInput={handleInput}
          className="mb-20"
          type="Number"
        />
        <button onClick={handleClick} className="btn btn-primary">
          Submit
        </button>
      </form>
      <button
        onClick={handleClickSort}
        className="mb-20 btn btn-reverse-primary"
      >
        Trier la liste
      </button>
      <ul className="d-flex flex-column card p-20">
        {userList.map((u, index) => (
          <li className="d-flex flex-row mb-20 " key={u.name}>
            <span className="flex-fill mr-5">{u.name}</span>
            <button
              onClick={() => handleClickDeleteUser(index)}
              className="btn btn-primary"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
