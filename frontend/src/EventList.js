// src/EventList.js
import React, { useState } from 'react';
import EventModal from './EventModal'; // Import the EventModal component

const eventsData = [
  { id: 1, name: "Concert A", date: "2024-10-20", ticketsAvailable: 50 },
  { id: 2, name: "Concert B", date: "2024-11-15", ticketsAvailable: 30 },
  { id: 3, name: "Concert C", date: "2024-12-01", ticketsAvailable: 20 },
];

function EventList() {
  const [events, setEvents] = useState(eventsData);
  const [bookedEvents, setBookedEvents] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for the modal
  const [selectedEvent, setSelectedEvent] = useState(null); // State for the selected event

  const handleBookTicket = (eventId) => {
    // Find the event before updating the state
    const eventToBook = events.find(event => event.id === eventId);

    // Check if tickets are available
    if (eventToBook && eventToBook.ticketsAvailable > 0) {
      // Update event state by reducing tickets available
      setEvents((prevEvents) => {
        return prevEvents.map((event) =>
          event.id === eventId
            ? { ...event, ticketsAvailable: event.ticketsAvailable - 1 }
            : event
        );
      });

      // Update the booked events
      setBookedEvents((prevBooked) => [...prevBooked, eventToBook]);

      // Set confirmation message
      setConfirmationMessage(`Successfully booked a ticket for ${eventToBook.name}!`);
      setErrorMessage('');
    } else {
      setErrorMessage(`Sorry, no tickets available for ${eventToBook.name}.`);
      setConfirmationMessage('');
    }
  };

  const openModal = (event) => {
    setSelectedEvent(event); // Set the selected event
    setModalIsOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalIsOpen(false); // Close the modal
    setSelectedEvent(null); // Clear the selected event
  };

  return (
    <div>
      <h2>Available Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <span>{event.name} - {event.date} (Tickets Available: {event.ticketsAvailable})</span>
            <button 
              onClick={() => handleBookTicket(event.id)} 
              disabled={event.ticketsAvailable === 0}
            >
              Book Ticket
            </button>
            <button onClick={() => openModal(event)}>View Details</button> {/* View Details button */}
          </li>
        ))}
      </ul>

      {confirmationMessage && <p style={{ color: 'green' }}>{confirmationMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <h3>Booked Events</h3>
      <ul>
        {bookedEvents.map((event, index) => (
          <li key={index}>{event.name} on {event.date}</li>
        ))}
      </ul>

      {/* Add the EventModal component */}
      <EventModal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        event={selectedEvent} 
      />
    </div>
  );
}

export default EventList;
