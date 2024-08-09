import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './form.css'; // Import your CSS for styling

export const ContactUs = ({ fareDetails }) => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [shirtCount, setShirtCount] = useState(fareDetails?.shirtCount || 0);
  const [pantCount, setPantCount] = useState(fareDetails?.pantCount || 0);
  const [shalwarKameezCount, setShalwarKameezCount] = useState(fareDetails?.shalwarKameezCount || 0);
  const [undergarmentCount, setUndergarmentCount] = useState(fareDetails?.undergarmentCount || 0);
  const [totalBill, setTotalBill] = useState(0);

  const PRICES = {
    shirt: 40,
    pant: 40,
    shalwarKameez: 60,
    undergarment: 20,
  };

  // Function to handle changes and ensure non-negative values
  const handlePositiveIntegerChange = (setter) => (e) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setter(value);
    }
  };

  // Calculate the bill when any of the counts change
  useEffect(() => {
    const total = (shirtCount * PRICES.shirt) +
                  (pantCount * PRICES.pant) +
                  (shalwarKameezCount * PRICES.shalwarKameez) +
                  (undergarmentCount * PRICES.undergarment);
    setTotalBill(total);
  }, [shirtCount, pantCount, shalwarKameezCount, undergarmentCount, PRICES.shirt, PRICES.pant, PRICES.shalwarKameez, PRICES.undergarment]);
  

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault();
  
    const emailParams = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      phone_number: form.current.phone_number.value,
      location: form.current.location.value,
      message: form.current.message.value,
      shirts: shirtCount,
      pants: pantCount,
      shalwar_kameez: shalwarKameezCount,
      undergarments: undergarmentCount,
      total_amount: totalBill, // Use the actual totalBill calculated
    };
  
    console.log(emailParams); // Log the params to confirm they are correct
  
    emailjs.send('service_89uaknh', 'template_hfj3kne', emailParams, 'yC0k7Hw98QUgTLJjN')
      .then(
        () => {
          setMessage('SUCCESS! Your message has been sent.');
          // Reset the form fields
          form.current.reset();
          // Reset state values
          setShirtCount(0);
          setPantCount(0);
          setShalwarKameezCount(0);
          setUndergarmentCount(0);
          setTotalBill(0);
          // Optionally reload the page (uncomment the next line if needed)
          // window.location.reload();
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
          value={shirtCount}
          onChange={handlePositiveIntegerChange(setShirtCount)}
        />

        <label htmlFor="pants">Pants</label>
        <input
          type="number"
          id="pants"
          name="pants"
          value={pantCount}
          onChange={handlePositiveIntegerChange(setPantCount)}
        />

        <label htmlFor="shalwar_kameez">Shalwar Kameez</label>
        <input
          type="number"
          id="shalwar_kameez"
          name="shalwar_kameez"
          value={shalwarKameezCount}
          onChange={handlePositiveIntegerChange(setShalwarKameezCount)}
        />

        <label htmlFor="undergarments">Undergarments</label>
        <input
          type="number"
          id="undergarments"
          name="undergarments"
          value={undergarmentCount}
          onChange={handlePositiveIntegerChange(setUndergarmentCount)}
        />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />

        {/* Display the bill */}
        <div className="bill-summary">
          <p>Total Bill: Rs.{totalBill}</p>
        </div>

        <button type="submit" className="submit-button">Order</button>
      </form>
      {message && <p className="feedback-message">{message}</p>}
    </div>
  );
};
