import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html, body{
    overflow-x: hidden;
    width: 100% !important;
    margin: 0;
    padding: 0;
  }
  
  * {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
  }
  
  input {
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

`
export default GlobalStyle