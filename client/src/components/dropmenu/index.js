// DropMenu.js

import React, { useState, useRef, useEffect } from 'react';
import { DropMenuContainer, DropMenuButton, DropMenuContent } from './dropmenu.style.js';

const DropMenu = ({ buttonLabel, menuItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropMenuRef.current && !dropMenuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropMenuContainer ref={dropMenuRef}>
      <DropMenuButton onClick={() => setIsOpen(!isOpen)}>
        {buttonLabel}
      </DropMenuButton>
      <DropMenuContent isOpen={isOpen}>
        {menuItems.map((item, index) => (
          <a key={index} href={item.href}>
            {item.label}
          </a>
        ))}
      </DropMenuContent>
    </DropMenuContainer>
  );
};

export default DropMenu;
