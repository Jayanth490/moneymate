import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
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
          <label>Message</label>
          <textarea rows="4" placeholder="Write your message..." required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
