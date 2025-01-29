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
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="loginRegister">
      <div className="emailBox">
        <Link to="/">
        <img className="logo" src={logo} alt="Fresh Balance" />
        </Link>
        <div className="emailBox2">
          <h1>Hello!</h1>
          <h3>Please enter your email address</h3>
          <input className={`email ${emailError ? "error" : ""}`} placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <button className="continue" onClick={handleContinue}>
            Continue
          </button>
          <h5>
            You don't have an account? Don't worry, just input the email with
            which you want to create an account.
          </h5>
          <hr />
          <h5>You can also login with:</h5>
          <div className="google">
            <i className="fa-brands fa-google"></i>
            <button>Google</button>
          </div>
          <div className="facebook">
            <i className="fa-brands fa-facebook-f"></i>
            <button>Facebook</button>
          </div>
        </div>
        <Link to="/support">Need help?</Link>
      </div>
      <div className="Login"></div>
      <div className="Register"></div>
    </div>
  );
}
