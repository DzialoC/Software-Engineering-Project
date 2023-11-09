import React from 'react';
import './NavList.css';

const NavList = () => {
  // Define your list of navigation items here
  const navItems = [
    'Overview',
    'Projects',
    'Infrastructure',
    'Maintenance',
    // Add more items as needed
  ];

  return (
    <ul className="nav-list">
      {navItems.map((item, index) => (
        <li key={index} className="nav-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default NavList;