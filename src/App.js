import "./App.css";
import { Fragment, useState } from "react";
import UserForm from "./components/Users/Form";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const textInputsValues = (nameInput, ageInput, emailInput) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          name: nameInput,
          age: ageInput,
          email: emailInput,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Fragment>
      <UserForm onAddUser={textInputsValues} />
      <UserList showUsers={users} />
    </Fragment>
  );
}

export default App;
