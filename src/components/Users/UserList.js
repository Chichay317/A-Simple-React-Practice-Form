import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.list}>
      <ul>
        {props.showUsers.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old), with Email ({user.email})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
