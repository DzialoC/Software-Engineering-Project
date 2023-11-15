// Header.styles.js

import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #007bff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.div`
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

export const HeaderLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
export const HeaderLinks = styled.nav`
  display: flex;
  gap: 20px;

  & a,
  & .button {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
    padding: 8px 16px; // Adjust padding as required
    font-size: 16px; // Adjust font-size as required
    border: none;
    background-color: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px; // To give rounded corners similar to the button

    &:hover {
      color: #e6e6e6;
    }
  }

  & .button.is-light {
    background-color: #fff; // This will give the button a white background
    color: #007bff; // This will give the button a blue text color
    border: 1px solid #fff; // Optional: Add border to the button
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
