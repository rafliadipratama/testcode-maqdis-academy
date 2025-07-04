import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="/images/logo-maqdis.jpg" alt="MAQDIS Academy Logo" className="logo" />
          <span>MAQDIS Academy</span>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MAQDIS Academy</h1>
          <p>Your journey to mastering Quranic knowledge starts here.</p>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.png" alt="Hero Image" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>MAQDIS Academy offers a wide range of courses focused on Islamic studies, especially the Quran. Our mission is to provide accessible and high-quality education to everyone.</p>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses">
        <h2>Our Courses</h2>
        <div className="course-list">
          <div className="course-item" style={{ backgroundImage: 'url(/images/course1-background.png)' }}>
            <h3>Tajwid Basics</h3>
            <p>Learn the fundamentals of Tajwid, the rules of Quranic pronunciation.</p>
          </div>
          <div className="course-item" style={{ backgroundImage: 'url(/images/course2-background.png)' }}>
            <h3>Advanced Tajwid</h3>
            <p>Deepen your understanding of Tajwid with advanced techniques and rules.</p>
          </div>
          <div className="course-item" style={{ backgroundImage: 'url(/images/course3-background.png)' }}>
            <h3>Quranic Memorization</h3>
            <p>Master the art of memorizing Quranic verses with our guided approach.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-media-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <p>&copy; 2025 MAQDIS Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
