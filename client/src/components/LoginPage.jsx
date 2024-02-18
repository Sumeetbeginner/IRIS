import React, { useState } from 'react';
import { login } from '../services/authService';
import '../css/authentication.css'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      console.log('User logged in:', user);

    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (

    <div id="body3">    
      <div id='formParent'>
      </div>    
      <div className="log-container">
        <h2 className='log'>LOGIN</h2>

        <div className="log-inputs">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button onClick={handleLogin}>LOGIN</button>
        <div className="reg-redirect">
          <p>Don't have an account ? <a href="/register">REGISTER</a></p>
                
        </div>

      </div>


    </div>
  );
};

export default LoginPage;