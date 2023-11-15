// Header.js

import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderLinks,
} from "./header.style.js";
import LogoutButton from "../Logout/LogoutButton.js";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>Atlantic City Public Works</HeaderLogo>
        <HeaderLinks>
          <a href="/Home">Home</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <LogoutButton className="button" /> {/* Apply the "button" class */}
        </HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
