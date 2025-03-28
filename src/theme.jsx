import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const lightTheme = {
  background: "#fff",
  text: "#000",
};

export const darkTheme = {
  background: "#000",
  text: "#fff",
};
