import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ContactUs } from './form';
import FareCalculator from './FareCalculator';
import About from './About';
import Home from './Home';
import './App.css';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="logo">
              <Link to="/">Laundry Solutions</Link>
            </div>
            <div className="menu-toggle" onClick={toggleNav}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/fare">Fare</Link></li>
              <li><Link to="/about">About</Link></li>
              <li>
                <Link to="/collect-cloth" className="collect-cloth-button">
                  Collect Cloth
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fare" element={<FareCalculator />} />
          <Route path="/collect-cloth" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
