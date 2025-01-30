import React, { useState } from "react";
import "./loginRegistration.css";
import logo from "../images/freshBalance.png";
import { Link } from 'react-router-dom';

export default function LoginRegistration() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleContinue = () => {
    if (!validateEmail(email)) {
      setEmailError("Please, enter a valid email address!");
    } 
    else 
    {
      setEmailError("");
    }
  };

  return (
    <div className="loginRegister">
      <Link to="/">
        <img className="loginRegisterLogo" src={logo} alt="Fresh Balance" />
      </Link>
      <div className="loginRegisterEmailBox">
        <h1>Hello!</h1>
        <h3>Please enter your email address</h3>
        <input className={`loginRegisterEmail ${emailError ? "Error" : ""}`} placeholder="Email" value={email} onChange={handleEmailChange}/>
          {emailError && <p className="login-register_error-message">{emailError}</p>}
        <button className="emailBoxContinue" onClick={handleContinue}>
          Continue
        </button>
        <h5>
          You don't have an account? Don't worry, just input the email with
          which you want to create an account.
        </h5>
        <hr/>
        <h5>You can also login with:</h5>
        <div className="emailBoxGoogle">
          <i className="fa-brands fa-google"></i>
          <button>Google</button>
        </div>
        <div className="emailBoxFacebook">
          <i className="fa-brands fa-facebook-f"></i>
          <button>Facebook</button>
        </div>
      </div>
        <div className="login">

        </div>
        <div className="register">
        </div>
        <Link className="needHelp" to="/support">Need help?</Link>
    </div>
  );
}
