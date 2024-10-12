// src/EventModal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This line is important for accessibility

const EventModal = ({ isOpen, onRequestClose, event }) => {
  if (!event) return null; // Return null if no event is passed

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Tickets Available: {event.ticketsAvailable}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default EventModal;
