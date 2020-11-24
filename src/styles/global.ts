import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    padding-top: 40px;
  }

  img {
    max-width: 100%;
    display: block;
    width: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`

