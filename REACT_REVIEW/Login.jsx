import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaUserMd } from 'react-icons/fa';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Basic form validation
    if (username === '' || password === '') {
      setMessage('Please enter both username and password');
    } else {
      setMessage('Logged in successfully');
      // You can add further logic such as redirecting to the home page
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <FaUserMd className="login-icon" />
        <h1>MediTrack</h1>
        <h2>Login</h2>
      </div>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group forgot-password-group">
          <div className="checkbox-group">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <Link to="/contact" className="forgot-password-link">Forgot Password?</Link>
        </div>
        <button type="submit" className="login-button">Login</button>
        {message && <p className="success-message">{message}</p>}
      </form>
      <div className="signup-link">
        <p>Don't have an account?</p>
        <Link to="/signup"><button className="signup-button">Sign Up</button></Link>
      </div>
    </div>
  );
}

export default Login;
