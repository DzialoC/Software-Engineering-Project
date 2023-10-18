// Footer.styles.js

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #333;
  padding: 20px 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const FooterLinks = styled.nav`
  display: flex;
  gap: 15px;

  & a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #007BFF;
    }
  }

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;
