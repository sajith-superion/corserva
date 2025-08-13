import React, { useEffect } from 'react';
import PPTCarousel from './components/PPTCarousel';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section with Image Carousel */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Corserva</h1>
            <p>Discover our innovative solutions and cutting-edge technology</p>
          </div>
          
          <PPTCarousel />
        </div>
      </section>

      {/* Chat Agent Section */}
      {/* <section className="chat-section">
        <div className="container">
          <h2>Need Help? Chat with our AI Assistant</h2>
          <p>Get instant answers to your questions with our intelligent chat agent</p>
          <div id="getodin-chat-widget"></div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
