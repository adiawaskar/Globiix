import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className='wrapper'>
      <form action=''>
        <h1>{isRegistering ? 'Register' : 'Login'}</h1>
        
        <div className='input-box'>
          <input type='text' placeholder='Username' required />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
          <FaLock className='icon' />
        </div>
        {isRegistering && (
          <div className='input-box'>
            <input type='password' placeholder='Confirm Password' required />
            <FaLock className='icon' />
          </div>
        )}
        {!isRegistering && (
          <div className='remember-forgot'>
            <label>
              <input type='checkbox' />Remember me
            </label>
            <a href='#'>Forgot password?</a>
          </div>
        )}
        <button type='submit'>{isRegistering ? 'Register' : 'Login'}</button>
        {!isRegistering && (
          <div className='register-link'>
            <p>
              Don't have an account?{' '}
              <a href='#' onClick={toggleRegister}>
                Register Now
              </a>
            </p>
          </div>
        )}
        {isRegistering && (
          <div className='register-link'>
            <p>
              Already have an account?{' '}
              <a href='#' onClick={toggleRegister}>
                Login
              </a>
            </p>
          </div>
        )}
        <div className='register-link'>
          <p>Sign up with Google</p>
        </div>
      </form>
    </div>
  );
};

export default Login;