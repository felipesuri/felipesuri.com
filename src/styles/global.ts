import { createGlobalStyle } from 'styled-components'

import * as V from './variables'

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    line-height: 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --backgroundColor: ${V.Color.white};
    --primaryColor: ${V.Color.black};
    --secondaryColor: ${V.Color.secondaryBlack};

    --bg: ${V.Color.white};
    --bgSolid: ${V.Color.whiteSolid};
    --bgSecondary: ${V.Color.grayWhite};
    --borderColor: ${V.Color.grayWhite};
    --highlightColor: ${V.Color.blue};
    --boxShadow: rgba(18, 18, 18, .12);
    
    --whiteSolid: ${V.Color.whiteSolid};
    --purple: ${V.Color.purple};
    background: var(--backgroundColor);
  }

  body.theme-dark {
    --backgroundColor: ${V.Color.tertiaryBlack};
    --primaryColor: ${V.Color.white};
    --secondaryColor: ${V.Color.secondaryWhite};

    --bg: ${V.Color.grayDarker};
    --bgSolid: ${V.Color.blackSolid};
    --bgSecondary: ${V.Color.grayDark};
    --borderColor: ${V.Color.grayDark};
    --highlightColor: ${V.Color.blueLight};
    --boxShadow: rgba(250, 250, 250, .12);
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px #181818; 
    border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb {
    background: #9730BF; 
    border-radius: 30px;
    animation: background 1s;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #aa52cc; 
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

	textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
	}
`
