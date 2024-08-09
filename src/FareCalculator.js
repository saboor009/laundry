import React, { useState } from 'react';
import './FareCalculator.css'; // Import the CSS file

const FareCalculator = () => {
  const [pants, setPants] = useState(0);
  const [shirts, setShirts] = useState(0);
  const [shalwarKameez, setShalwarKameez] = useState(0);
  const [undergarments, setUndergarments] = useState(0);

  const PRICE_SHIRTS = 40;
  const PRICE_PANTS = 40;
  const PRICE_SHALWAR_KAMEEZ = 60;
  const PRICE_UNDERGARMENTS = 20;

  const calculateTotalFare = () => {
    return (
      pants * PRICE_PANTS +
      shirts * PRICE_SHIRTS +
      shalwarKameez * PRICE_SHALWAR_KAMEEZ +
      undergarments * PRICE_UNDERGARMENTS
    );
  };

  return (
    <div className="fare-calculator">
      <h2>Price Calculator</h2>
      <div className="fare-item">
        <label>Pants (₨{PRICE_PANTS} each):</label>
        <input
          type="number"
          value={pants}
          onChange={(e) => setPants(Number(e.target.value))}
          min="0"
        />
      </div>
      <div className="fare-item">
        <label>Shirts (₨{PRICE_SHIRTS} each):</label>
        <input
          type="number"
          value={shirts}
          onChange={(e) => setShirts(Number(e.target.value))}
          min="0"
        />
      </div>
      <div className="fare-item">
        <label>Shalwar Kameez (₨{PRICE_SHALWAR_KAMEEZ} each):</label>
        <input
          type="number"
          value={shalwarKameez}
          onChange={(e) => setShalwarKameez(Number(e.target.value))}
          min="0"
        />
      </div>
      <div className="fare-item">
        <label>Undergarments (₨{PRICE_UNDERGARMENTS} each):</label>
        <input
          type="number"
          value={undergarments}
          onChange={(e) => setUndergarments(Number(e.target.value))}
          min="0"
        />
      </div>
      <div className="fare-total">
        <h3>Total Price: ₨{calculateTotalFare()}</h3>
      </div>
    </div>
  );
};

export default FareCalculator;
