import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import EventList from './EventList';
import EventModal from './EventModal'; // This can be used in EventList
import Login from './Login';
import Register from './Register';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the Event Ticket Booking App!</h1>

        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Link to EventList */}
            </li>
            <li>
              <Link to="/login">Login</Link> {/* Link to Login page */}
            </li>
            <li>
              <Link to="/register">Register</Link> {/* Link to Register page */}
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<EventList />} /> {/* Home route showing EventList */}
          <Route path="/login" element={<Login />} /> {/* Route for Login */}
          <Route path="/register" element={<Register />} /> {/* Route for Register */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
