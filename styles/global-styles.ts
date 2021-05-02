import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
  }

`
export default GlobalStyle