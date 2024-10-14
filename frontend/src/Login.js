import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
function Login() {
  return (
    <div>
      <h2>Login</h2>
      {/* Add your login form here */}
      <form>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
