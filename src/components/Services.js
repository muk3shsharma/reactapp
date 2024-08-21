import React, { useState, useEffect } from 'react';
import './styles.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setServices([
        { id: 1, name: 'Responsive Design', description: 'Creating websites that look great on any device.' },
        { id: 2, name: 'SEO Optimization', description: 'Improving your website\'s visibility on search engines.' },
        { id: 3, name: 'E-commerce Solutions', description: 'Building online stores with seamless shopping experiences.' },
        { id: 4, name: 'Web Development', description: 'Developing high-quality web applications.' },
        { id: 5, name: 'Content Management', description: 'Implementing CMS for easy content updates.' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      <h1>Our Services</h1>
      <div className="content">
        <div className="main-content">
          {loading ? (
            <p>Loading services...</p>
          ) : (
            <div className="services-grid">
              {services.map(service => (
                <div key={service.id} className="service-card">
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="side-content right">
          <h3>Additional Info</h3>
          <p>Explore our case studies to see how we've helped clients achieve their goals. Our portfolio showcases our expertise and successful projects.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
