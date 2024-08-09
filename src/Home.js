import React from 'react';
import './Home.css'; // Ensure you have this CSS file with your styles
import heroImage from './heroo.jpg'; // Replace with the path to your image

const Home = () => {
  return (
    <div className="home-page">
      <section className="home-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>Welcome to Laundry Solutions</h1>
          <p>Your one-stop solution for all your laundry needs. We offer quick, reliable, and affordable laundry services to make your life easier.</p>
          <div className="cta-buttons">
            <a href="/fare" className="cta-button prices-button">Check Our Prices</a>
            <a href="/collect-cloth" className="cta-button collect-button">Order Now!</a>
          </div>
        </div>
      </section>
      <section className="home-services">
        <div className="service">
          <h2>Fast Service</h2>
          <p>We provide quick and efficient laundry services, ensuring your clothes are ready when you need them.</p>
        </div>
        <div className="service">
          <h2>Affordable Prices</h2>
          <p>Our prices are designed to be budget-friendly while maintaining high quality in every service.</p>
        </div>
        <div className="service">
          <h2>Eco-Friendly</h2>
          <p>We use environmentally friendly products and practices to ensure a minimal impact on the planet.</p>
        </div>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 Laundry Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
