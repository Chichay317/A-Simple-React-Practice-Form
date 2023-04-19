import React, { Fragment, useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./Form.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const textInputRef = useRef();
  const ageInputRef = useRef();
  const emailInputRef = useRef();
  const [errors, setErrors] = useState();

  const confirmHandler = () => {
    setErrors(null);
  };

  const addUsers = (event) => {
    event.preventDefault();

    const enteredName = textInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const enteredEmailIsValid = enteredEmail.includes("@");

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrors({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (enteredEmail.trim().length === 0 || !enteredEmailIsValid) {
      setErrors({
        title: "Invalid Email!",
        message: "Please enter a valid email!",
      });
      return;
    }

    if (+enteredAge < 1) {
      setErrors({
        title: "Not an age!",
        message: "Please enter a value greater than one",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge, enteredEmail);
    textInputRef.current.value = "";
    ageInputRef.current.value = "";
    emailInputRef.current.value = "";
  };

  return (
    <Fragment>
      {errors && (
        <ErrorModal
          title={errors.title}
          message={errors.message}
          onConfirm={confirmHandler}
        />
      )}
      <Card>
        <form onSubmit={addUsers}>
          <div className={classes.formgroup}>
            <label htmlFor="text">Username</label>
            <input id="text" type="text" ref={textInputRef}></input>
          </div>
          <div className={classes.formgroup}>
            <label htmlFor="age">Age(Years)</label>
            <input id="age" type="number" ref={ageInputRef}></input>
          </div>
          <div className={classes.formgroup}>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="text" ref={emailInputRef}></input>
          </div>

          <div className={classes.formgroup}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default UserForm;
