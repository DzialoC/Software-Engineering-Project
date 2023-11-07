import React from 'react';

function ProgressBar({ value, max }) {
  const percentage = (value / max) * 100;

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${percentage}%` }}
      ></div>
      <span className="progress-bar-text">{`${percentage.toFixed(2)}%`}</span>
    </div>
  );
}

export default ProgressBar;