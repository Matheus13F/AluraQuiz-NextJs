import React from 'react';
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }

  .social-media {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 15px;
  }

  .content {
    display: flex;
    align-items: center;
  }
`;

export default function Footer(props) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <div className="content">
        <a href="https://www.alura.com.br/">
          <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
        </a>
        <p>
          Orgulhosamente criado durante
          {' '}
          a
          {' '}
          <a href="https://www.alura.com.br/">
            <span>Imersão React da Alura</span>
          </a>
        </p>
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com/oi_matthew/" target="_blank">Instagram</a>
        <a href="https://www.linkedin.com/in/matheus13f/" target="_blank">Linkedin</a>
      </div>
    </FooterWrapper>
  );
}
