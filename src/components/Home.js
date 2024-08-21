import React from 'react';
import './styles.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="content">
        <div className="main-content">
          <p>Welcome to the Home Page! This is where you can find the latest updates and news about our website.</p>
          <section className="home-section">
            <h2>Latest News</h2>
            <p>Stay tuned for the latest news and updates. We are constantly working to improve our services and bring you the best experience.</p>
            <button className="btn" onClick={() => window.open('/latest-news', '_blank')}>Read More</button>
          </section>
          <section className="home-section">
            <h2>Upcoming Events</h2>
            <p>Join us for our upcoming events and webinars. Check out our events page for more details.</p>
            <button className="btn" onClick={() => window.open('/upcoming-events', '_blank')}>View Events</button>
          </section>
        </div>
        <div className="side-content left">
          <h3>Additional Info</h3>
          <p>Explore our blog for the latest articles on industry trends, tips, and best practices. Stay informed and ahead of the curve with our expert insights.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
