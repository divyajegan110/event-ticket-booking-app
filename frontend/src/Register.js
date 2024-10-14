import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
function Register() {
  return (
    <div>
      <h2>Register</h2>
      {/* Add your registration form here */}
      <form>
        <div>
          <label>Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
