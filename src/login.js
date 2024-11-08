import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './login.css';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-form-wrapper">
      <div className="login-form-box">
        {isLogin ? (
          <form>
            <h1>Login</h1>
            <div className="login-form-input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="login-form-input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="login-form-remember-forgot">
              <label>
                <input type="checkbox" /> I agree to terms & conditions
              </label>
            </div>
            <button type="submit" className="login-form-button">Login</button>
            <div className="login-form-register-link">
              <p>
                Don't have an account?{' '}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Register
                </a>
              </p>
            </div>
          </form>
        ) : (
          <form>
            <h1>Register</h1>
            <div className="login-form-input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="login-form-input-box">
              <input type="email" placeholder="Email" required />
              <FaEnvelope className="icon" />
            </div>
            <div className="login-form-input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="login-form-remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="login-form-button">Register</button>
            <div className="login-form-register-link">
              <p>
                Already have an account?{' '}
                <a href="#" onClick={() => setIsLogin(true)}>
                  Login
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
