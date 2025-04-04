import React from 'react';

function AboutUs() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <iframe
      src='./about.html'
      width='100%'
      height='800px'
      style={{ border: 'none', overflow: 'hidden' }}
      ></iframe>
    </div>
  );
}

export default AboutUs;
