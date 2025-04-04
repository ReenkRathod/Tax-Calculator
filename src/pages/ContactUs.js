import React from 'react';

function ContactUs() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <iframe
      src='./Contact.html'
      width='100%'
      height='800px'
      style={{ border: 'none', overflow: 'hidden' }}
      ></iframe>
    </div>
  );
}

export default ContactUs;