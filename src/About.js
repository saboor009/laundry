import React from 'react';
import './About.css'; // Import your CSS file for the About page
import aboutImage from './about.png'; // Import the image

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>ABOUT US</h1>
      </header>
      <section className="about-content">
        <div className="about-text">
          <h2>Welcome to Laundry Solutions</h2>
          <p>
            At Laundry Solutions, we are dedicated to providing top-quality laundry services to make your life easier. With years of experience in the industry, we understand the needs of our customers and strive to deliver efficient, reliable, and high-quality laundry solutions.
          </p>
          <p>
            Our team of professionals is committed to treating each garment with care and precision. Whether you require regular laundry services or specialized cleaning, we have the expertise and resources to meet all your needs.
          </p>
          <p>
            We are proud of our eco-friendly practices and use the latest technology to minimize our environmental impact. Our state-of-the-art facilities and dedication to customer satisfaction make us the go-to choice for all your laundry needs.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Laundry Services" />
        </div>
      </section>
      <footer className="about-footer">
        <p>&copy; 2024 Laundry Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
