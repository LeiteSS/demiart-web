import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  body {
      background-color: ${({theme}) => theme.colors.secondary};
  }
  
  input, button, textarea, select {
    font-family: 'Roboto', sans-serif;
  }
  input:focus, textarea:focus, select:focus{
    outline: none;
  }
  a {
    text-decoration: none;
    color: ${({theme})=> theme.colors.primary};
    &:hover {
      filter: opacity(0.8)
    }
  }
  .primary-color{
    color: ${({theme})=> theme.colors.primary};
  }
  .font-bold{
    font-weight: 700;
  }
  .h2{
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 28px;
    color: #000000;
  }
`

export default GlobalStyles