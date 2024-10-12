import React from 'react';
import './App.css';
import EventList from './EventList'; // Import the EventList component

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Event Ticket Booking App!</h1>
      <EventList /> {/* Use the EventList component here */}
    </div>
  );
}

export default App;
