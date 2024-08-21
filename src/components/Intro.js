import React from 'react';
import './styles.css';

const Intro = () => {
  return (
    <div className="container">
      <h1>Introduction</h1>
      <div className="content">
        <div className="main-content">
          <p>This is the introduction page. Here you can learn more about our mission, vision, and values.</p>
          <section className="intro-section">
            <h2>Our Mission</h2>
            <p>Our mission is to provide high-quality services that meet the needs of our customers. We strive to exceed expectations and deliver exceptional value.</p>
          </section>
          <section className="intro-section">
            <h2>Our Vision</h2>
            <p>We envision a world where our services make a positive impact on the lives of people everywhere. We are committed to innovation and excellence.</p>
          </section>
          <section className="intro-section">
            <h2>Our Values</h2>
            <p>Integrity, Excellence, Innovation, and Customer Satisfaction are at the core of everything we do.</p>
          </section>
        </div>
        <div className="side-content right">
          <h3>Additional Info</h3>
          <p>Discover our journey and the milestones we've achieved over the years. Learn about the dedicated team behind our success and their commitment to excellence.</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
