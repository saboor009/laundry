import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ContactUs } from './form';
import FareCalculator from './FareCalculator'; // Import the FareCalculator component
import About from './About'; // Import the About component
import Home from './Home'; // Import the Home component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="logo">
              <Link to="/">Laundry Solutions</Link>
            </div>
            <div className="menu-toggle">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <div className="nav-button-container">
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/fare">Fare</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>
                  <Link to="/collect-cloth" className="collect-cloth-button">
                    Collect Cloth
                  </Link>
                </li>
              </ul>
            </div>
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
