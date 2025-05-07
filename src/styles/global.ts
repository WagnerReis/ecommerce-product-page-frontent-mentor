import { createGlobalStyle } from "styled-components";
import { fontFamily } from "./mixins";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input {
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.gray[100]};
    }
  }

  body {
    background: ${(props) => props.theme.gray[100]};
    color: ${(props) => props.theme.gray[950]};
    -webkit-font-smoothing: antialiased;
  }

  body, input-security, textarea, button {
    font-family: ${fontFamily.kumbhSans};
    font-weight: 400;
    font-size: 1rem;
  }
`;
