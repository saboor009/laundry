import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './form.css'; // Import your CSS for styling

export const ContactUs = ({ fareDetails }) => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current.user_email.value; // Get the user's email from the form

    // Send the initial email (e.g., to your service email)
    emailjs
      .sendForm('service_89uaknh', 'template_hfj3kne', form.current, {
        publicKey: 'yC0k7Hw98QUgTLJjN',
      })
      .then(
        () => {
          setMessage('SUCCESS! Your message has been sent.');
          form.current.reset(); // Clear the form after successful submission
          
          // Send a confirmation email to the user
          emailjs.send('service_89uaknh', 'template_cae8vpi', {
            user_name: form.current.user_name.value,
            user_email: userEmail,
            shirts: fareDetails?.shirtCount || 0,
            pants: fareDetails?.pantCount || 0,
            shalwar_kameez: fareDetails?.shalwarKameezCount || 0,
            undergarments: fareDetails?.undergarmentCount || 0,
          }, 'yC0k7Hw98QUgTLJjN')
          .then(() => {
            console.log('Confirmation email sent successfully');
          })
          .catch((error) => {
            console.error('Failed to send confirmation email', error);
          });
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

        <label htmlFor="shirts">Shirts</label>
        <input
          type="number"
          id="shirts"
          name="shirts"
          value={fareDetails?.shirtCount || 0}
          readOnly
        />

        <label htmlFor="pants">Pants</label>
        <input
          type="number"
          id="pants"
          name="pants"
          value={fareDetails?.pantCount || 0}
          readOnly
        />

        <label htmlFor="shalwar_kameez">Shalwar Kameez</label>
        <input
          type="number"
          id="shalwar_kameez"
          name="shalwar_kameez"
          value={fareDetails?.shalwarKameezCount || 0}
          readOnly
        />

        <label htmlFor="undergarments">Undergarments</label>
        <input
          type="number"
          id="undergarments"
          name="undergarments"
          value={fareDetails?.undergarmentCount || 0}
          readOnly
        />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />

        <button type="submit" className="submit-button">Collect Clothes</button>
      </form>
      {message && <p className="feedback-message">{message}</p>}
    </div>
  );
};
