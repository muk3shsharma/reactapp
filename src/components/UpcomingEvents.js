import React from 'react';
import './styles.css';

const UpcomingEvents = () => {
  return (
    <div className="container">
      <h1>Upcoming Events</h1>
      <div className="events-grid">
        <section className="events-section">
          <h2>Webinar on Web Development</h2>
          <p>Join us for an exciting webinar on the latest trends in web development. Register now to secure your spot!</p>
          <button className="btn" onClick={() => alert('Surprise! You have unlocked early access to our webinar: WEBDEV2024')}>Get Surprise</button>
        </section>
        <section className="events-section">
          <h2>Annual Tech Conference</h2>
          <p>Don't miss our annual tech conference where industry leaders share their insights and experiences.</p>
        </section>
        <section className="events-section">
          <h2>Health & Wellness Workshop</h2>
          <p>Participate in our workshop to learn about the latest health and wellness practices.</p>
        </section>
        <section className="events-section">
          <h2>Community Clean-Up Day</h2>
          <p>Join us for a community clean-up day and help make our neighborhood a better place.</p>
        </section>
        <section className="events-section">
          <h2>Environmental Awareness Seminar</h2>
          <p>Attend our seminar to learn about environmental issues and how you can contribute to sustainability.</p>
        </section>
        <section className="events-section">
          <h2>Customer Appreciation Event</h2>
          <p>We are hosting a special event to show our appreciation for our valued customers. Don't miss it!</p>
        </section>
        <section className="events-section">
          <h2>Industry Networking Event</h2>
          <p>Network with professionals in your industry and build valuable connections.</p>
        </section>
        <section className="events-section">
          <h2>Product Launch Event</h2>
          <p>Be the first to see our new products at our exclusive launch event.</p>
        </section>
        <section className="events-section">
          <h2>Expert Panel Discussion</h2>
          <p>Join our panel of experts as they discuss the latest challenges and opportunities in the industry.</p>
        </section>
        <section className="events-section">
          <h2>Company Anniversary Celebration</h2>
          <p>Celebrate our company's anniversary with us at a special event filled with fun and surprises.</p>
        </section>
      </div>
    </div>
  );
};

export default UpcomingEvents;
