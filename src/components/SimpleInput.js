import { useState } from "react";
import "./SimpleInput.css"

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.split("").includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    setEnteredName(""); 
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <div  className="main">
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <div className="head"><label htmlFor="name">Your Name</label></div>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className={emailInputClasses}>
        <div className="head"><label htmlFor="email">Your E-mail</label></div>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
        />
        </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must be not empty.</p>
      )}
      {emailInputIsInvalid && (
        <p className="error-text">
          Email must be not empty and include sighn @.
        </p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
    </div>
  );
};

export default SimpleInput