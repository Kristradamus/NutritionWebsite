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
        <img className="logRegLogo" src={logo} alt="Fresh Balance" />
      </Link>
      <div className="logRegEmailBox">
        <h1>Hello!</h1>
        <h3>Please enter your email address</h3>
        <input className={`logRegEmail ${emailError ? "Error" : ""}`} placeholder="logRegEmail" value={email} onChange={handleEmailChange}/>
          {emailError && <p className="logRegErrorMessage">{emailError}</p>}
        <button className="logRegContinue" onClick={handleContinue}>
          Continue
        </button>
        <h5>
          You don't have an account? Don't worry, just input the email with
          which you want to create an account.
        </h5>
        <hr/>
        <h5>You can also login with:</h5>
        <div className="logRegGoogle">
          <i className="fa-brands fa-google"></i>
          <button className="logRegGoogleButt">Google</button>
        </div>
        <div className="logRegFacebook">
          <i className="fa-brands fa-facebook-f"></i>
          <button className="logRegFacebookButt">Facebook</button>
        </div>
      </div>
        <div className="logRegLogin">

        </div>
        <div className="logRegRegister">
        </div>
        <Link className="logRegNeedHelp" to="/support">Need help?</Link>
    </div>
  );
}
