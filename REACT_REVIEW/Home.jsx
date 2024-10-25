import React from 'react';
import './Home.css';
import profilePic from './newdp.jpeg';
function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="header-top">
          <div className="profile-icon">
            <img src={profilePic} alt="Profile" />
          </div>
          <nav className="nav-buttons">
            <a href="#feature">     Features</a>
            <a href="#about">About Us</a>
            <a href="#feedback">Feedback</a>
            <a href="#contact">Contact Details</a>
          </nav>
          <div className="auth-buttons">
            <button className="cta-button">Sign Up / Login</button>
          </div>
        </div>
        <div className="hero-overlay">
          <h1>Welcome to MediTrack</h1>
          <p>Your trusted partner in pharmacy management excellence.</p>
          <button className="cta-button">Explore Now</button>
        </div>
      </header>

      <section id="feature" className="features-section">
        <h2>Features Overview</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="icon-inventory"></i>
            <h3>Inventory Management</h3>
            <p>Real-time tracking and efficient stock management.</p>
          </div>
          <div className="feature">
            <i className="icon-prescription"></i>
            <h3>Prescription Management</h3>
            <p>Quick and easy prescription processing.</p>
          </div>
          <div className="feature">
            <i className="icon-patient"></i>
            <h3>Patient Management</h3>
            <p>Comprehensive patient records at your fingertips.</p>
          </div>
          <div className="feature">
            <i className="icon-analytics"></i>
            <h3>Reporting & Analytics</h3>
            <p>Insightful data to drive better decision-making.</p>
          </div>
          <div className="feature">
            <i className="icon-billing"></i>
            <h3>Billing & Payments</h3>
            <p>Simplified billing with multiple payment options.</p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2 id ="about">Why Choose Us?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>Efficiency</h3>
            <p>Automate routine tasks and minimize errors.</p>
          </div>
          <div className="benefit">
            <h3>Compliance</h3>
            <p>Stay compliant with the latest healthcare regulations.</p>
          </div>
          <div className="benefit">
            <h3>Accessibility</h3>
            <p>Access the system from anywhere, anytime.</p>
          </div>
          <div className="benefit">
            <h3>Security</h3>
            <p>Advanced encryption to protect your data.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div id="feedback" className="testimonial">
          <p>“Our pharmacy’s efficiency has skyrocketed since we started using MediTrack Management System. It’s a game-changer!”</p>
          <p>- Akshaya</p>
        </div>
      </section>

      <footer className="footer">
        <div  id="contact" className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <p>© 2024 MediTrack. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
