// CollapsibleMenu.jsx

import React, { useState } from "react";

const CollapsibleMenu = ({ title, children, onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{title}</div>
      {isOpen && <div className="menu-contents">{children}</div>}
    </div>
  );
};

export default CollapsibleMenu;
