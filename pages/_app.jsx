import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import db from "../db.json";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
   
   display: flex;
   flex-direction: column;
   font-family: 'Lato', sans-serif;

   color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column
  }
`;
const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
