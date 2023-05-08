import React, { useState } from "react";
import "./App.css";
import validator from "validator";
import logo from "../src/images/logo.jpg";
import Dashboard from "./Dashboard/Dashboard";


function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

   // eslint-disable-next-line
  const [message, setMessage] = useState("");  
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage("Thank you");
    } else {
      setMessage("Please, enter valid Email!");
    }
  };

  // User Login info
  const database = [
    { username: "adminworks@gmail.com", password: "*Tammana3" },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
const renderForm = (
      <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>E-Mail id</label>
          <input type="text" name="uname" required onChange={(e) => validateEmail(e)}/>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
    );
  
    

  return (
    <div className="app">
      {!isSubmitted &&
      <div className="login-form">
        <div className="title">Login Page</div>
        <div className="logo">
          <img src={logo} alt="logo-img" width={100} height={100}/>
        {!isSubmitted && renderForm}
        </div>
      </div>
      }
      {isSubmitted && <Dashboard/> }
    </div>
  );
}

export default App;