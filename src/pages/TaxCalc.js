import React from 'react';

function TaxCalc() {
  return (
    <div className="page">
      <iframe
      src='./Taxcalc.html'
      width='100%'
      height='800px'
      style={{ border: 'none', overflow: 'hidden' }}
      ></iframe>
    </div>
  );
}

export default TaxCalc;