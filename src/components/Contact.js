import React from 'react';
import './styles.css';

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div className="content">
        <div className="main-content">
          <p>Feel free to reach out to us with any questions or concerns. We are here to help!</p>
          <section className="contact-section">
            <h2>Contact Information</h2>
            <p>Email: support@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </section>
          <section className="contact-section">
            <h2>Office Location</h2>
            <p>123 Main Street, Suite 100<br />City, State, ZIP</p>
          </section>
          <section className="contact-section">
            <h2>Follow Us</h2>
            <p>Stay connected with us on social media:</p>
            <ul className="social-links">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </section>
        </div>
        <div className="side-content left">
          <h3>Additional Info</h3>
          <p>Our customer support team is available 24/7 to assist you. Visit our FAQ page for quick answers to common questions.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
