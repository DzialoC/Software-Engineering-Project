import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        {/* Add more navigation items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;