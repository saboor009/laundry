import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './form.css'; // Import your CSS for styling

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_89uaknh', 'template_hfj3kne', form.current, {
        publicKey: 'yC0k7Hw98QUgTLJjN',
      })
      .then(
        () => {
          setMessage('SUCCESS! Your message has been sent.');
          form.current.reset(); // Clear the form after successful submission
        },
        (error) => {
          setMessage(`FAILED... ${error.text}`);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="user_name">Name</label>
        <input type="text" id="user_name" name="user_name" required />

        <label htmlFor="user_email">Email</label>
        <input type="email" id="user_email" name="user_email" required />

        <label htmlFor="phone_number">Phone Number</label>
        <input type="tel" id="phone_number" name="phone_number" required />

        <label htmlFor="location">Location</label>
        <input type="text" id="location" name="location" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />

        <button type="submit" className="submit-button">Collect Clothes</button>
      </form>
      {message && <p className="feedback-message">{message}</p>}
    </div>
  );
};
