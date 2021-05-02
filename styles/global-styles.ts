import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  button {
    background: none;
    border: none;
    padding: 0;
  }
`

export default GlobalStyle