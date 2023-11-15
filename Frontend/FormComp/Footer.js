import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      {/* Add footer content here */}
      &copy; {new Date().getFullYear()} AC Public Works
    </footer>
  );
}

export default Footer;
