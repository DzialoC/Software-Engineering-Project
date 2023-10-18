// Navbar.styles.js

import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
`;

export const MenuItem = styled.li`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
