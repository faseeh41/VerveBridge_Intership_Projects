// Footer.jsx
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Coded by{" "}
        <a
          href="https://github.com/faseeh41"
          target="_blank"
          rel="noopener noreferrer"
        >
          M.Faseeh Hassan
        </a>
        , Open sourced on{" "}
        <a
          href="https://github.com/faseeh41/VerveBridge_Intership_Projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        . Hosted on Vercel.
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: var(--mainBlue);
  color: var(--mainWhite);
  text-align: center;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000; /* Ensure the footer is above other content */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Add shadow for better separation */
  
  p {
    margin: 0;
    font-size: 1rem;
  }

  a {
    color: var(--mainYellow);
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default Footer;
