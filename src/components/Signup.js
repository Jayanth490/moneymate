import React from 'react';

const Signup = () => {
  return (
    <div className="contact-container">
      <h2>Signup</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Set your password" required />
        </div><div className="form-group">
          <label>Phone number</label>
          <input type="tel" placeholder="phone number" required />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
