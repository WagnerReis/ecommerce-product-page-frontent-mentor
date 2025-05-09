import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
  min-width: 9.8125rem;
  height: 3.5rem;
  background: ${(props) => props.theme.gray[50]};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    background: transparent;
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
  }

  span {
    color: ${(props) => props.theme.gray[950]};
    ${mixins.fonts.textPreset3Bold}
  }

  svg {
    color: ${(props) => props.theme.orange[300]};
    font-weight: bold;

    &:hover {
      color: ${(props) => props.theme.orange[500]};
      transition: color 0.2s;
    }
  }
`;
