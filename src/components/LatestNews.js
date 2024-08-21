import React from 'react';
import './styles.css';

const LatestNews = () => {
  return (
    <div className="container">
      <h1>Latest News</h1>
      <div className="news-grid">
        <section className="news-section">
          <h2>Breaking News</h2>
          <p>We are thrilled to announce the launch of our new product line! Stay tuned for more details.</p>
          <button className="btn" onClick={() => alert('Surprise! You have unlocked a special discount code: PREMIUM20')}>Get Surprise</button>
        </section>
        <section className="news-section">
          <h2>Tech Innovations</h2>
          <p>Our latest AI technology is set to revolutionize the industry. Discover how it can benefit your business.</p>
        </section>
        <section className="news-section">
          <h2>Health & Wellness</h2>
          <p>Explore our new wellness programs designed to improve your overall health and well-being.</p>
        </section>
        <section className="news-section">
          <h2>Community Outreach</h2>
          <p>Join us in our community outreach programs and make a positive impact in your neighborhood.</p>
        </section>
        <section className="news-section">
          <h2>Environmental Initiatives</h2>
          <p>Learn about our efforts to promote sustainability and protect the environment.</p>
        </section>
        <section className="news-section">
          <h2>Customer Success Stories</h2>
          <p>Read inspiring stories from our customers who have achieved great success with our products.</p>
        </section>
        <section className="news-section">
          <h2>Industry Trends</h2>
          <p>Stay updated with the latest trends and developments in your industry.</p>
        </section>
        <section className="news-section">
          <h2>Product Updates</h2>
          <p>Get the latest updates on our products and services, including new features and improvements.</p>
        </section>
        <section className="news-section">
          <h2>Expert Insights</h2>
          <p>Gain valuable insights from industry experts on various topics and challenges.</p>
        </section>
        <section className="news-section">
          <h2>Company Milestones</h2>
          <p>Celebrate our achievements and milestones as we continue to grow and innovate.</p>
        </section>
      </div>
    </div>
  );
};

export default LatestNews;
