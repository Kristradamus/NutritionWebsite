import React, { useState } from 'react';

export default function LoginRegistration() {
  const [isLogin, setIsLogin] = useState(true);
  
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="tabs">
        <button
          className={`tab-btn ${isLogin ? 'active' : ''}`}
          onClick={handleToggle}
        >
          Login
        </button>
        <button
          className={`tab-btn ${!isLogin ? 'active' : ''}`}
          onClick={handleToggle}
        >
          Register
        </button>
      </div>

      <div className="form-container">
        {isLogin ? (
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <button type="submit" className="btn">Login</button>
            </form>
          </div>
        ) : (
          <div className="register-form">
            <h2>Register</h2>
            <form>
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Create a password" required />
              </div>
              <div className="input-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm your password" required />
              </div>
              <button type="submit" className="btn">Register</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
