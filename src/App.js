import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Services from './components/Services';
import './components/styles.css';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import UpcomingEvents from './components/UpcomingEvents';
import LatestNews from './components/LatestNews';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <CustomCursor/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ensure Home is properly rendered */}
          <Route path="/intro" element={<Intro />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
};

export default App;
