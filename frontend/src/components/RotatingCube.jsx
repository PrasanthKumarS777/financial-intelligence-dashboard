import React from 'react';

const RotatingCube = () => {
  return (
    <div className="cube-scene">
      <div className="cube">
        <div className="cube-face front">F</div>
        <div className="cube-face back">H</div>
        <div className="cube-face right">U</div>
        <div className="cube-face left">B</div>
        <div className="cube-face top">₹</div>
        <div className="cube-face bottom">💰</div>
      </div>
    </div>
  );
};

export default RotatingCube;
