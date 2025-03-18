import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ContactUs from './components/ContactUs';
import Quotes from './components/Quotes';
import './App.css';

const App = () => {
  const quote1 = Quotes[Math.floor(Math.random() * Quotes.length)];
  const quote2 = Quotes[Math.floor(Math.random() * Quotes.length)];

  return (
    <Router>
      <div>
      <nav className="navbar">
  <Link to="/" className="nav-link">Home</Link>
  <Link to="/login" className="nav-link">Login</Link>
  <Link to="/signup" className="nav-link">Signup</Link>
  <Link to="/contactus" className="nav-link">Contact</Link>
</nav>


        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <div>
              {/* Logo */}
              <img src="/logo.jpeg" alt="Logo" />
              <h1>Money Mate</h1>
              
              {/* Quotes */}
              <div className="quote-box">
                <p>{quote1}</p>
                <p>{quote2}</p>
              </div>
            </div>
          } />

          {/* Other Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
