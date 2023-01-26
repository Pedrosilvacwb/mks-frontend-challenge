import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root{
    --color-primary:#0F52BA;
    --color-black:#2C2C2C;
    --color-gray:#EEEEEE;
    --color-white:#FFFFFF;

    --color-sucess:#3FE864;
    --color-negative:#E83F5B;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, blockquote,
  a, img, small, ol, ul, li, form, label, footer, header, nav, section{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  body {
    background: var(--color-white);
    line-height: 1;
    font-family: 'Montserrat', sans-serif;
  }
  ol, ul {
    list-style: none;
  }

  `;
