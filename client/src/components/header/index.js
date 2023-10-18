// Header.js

import React from 'react';
import { HeaderContainer, HeaderContent, HeaderLogo, HeaderLinks } from './header.style.js';
import Logout from '../Logout/index.js'



const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          Atlantic City Public Works
        </HeaderLogo>
        <HeaderLinks>
          <a href="/Home">Home</a>
          <a href="/contact">Contact</a>
          <button onClick={Logout} className="button is-light">Log Out</button>
        </HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
