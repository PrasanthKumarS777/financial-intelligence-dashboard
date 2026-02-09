import React from 'react';

const FloatingRupee = () => {
  return (
    <div className="floating-rupee-container">
      {/* Main Rupee Symbol */}
      <div className="rupee-symbol">
        <span className="rupee-main">₹</span>
        <div className="rupee-glow"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      
      {/* Orbiting Coins */}
      <div className="coin coin-1">₹</div>
      <div className="coin coin-2">₹</div>
      <div className="coin coin-3">₹</div>
    </div>
  );
};

export default FloatingRupee;
