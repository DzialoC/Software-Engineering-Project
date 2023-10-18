// Footer.js

import React from 'react';
import { FooterContainer, FooterContent, FooterLogo, FooterLinks } from './footer.style.js';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
        Atlantic City Public Works
        </FooterLogo>
        <FooterLinks>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
