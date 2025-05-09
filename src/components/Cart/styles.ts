import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CartContainer = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 22.5rem;
  height: 16rem;
  background: ${(props) => props.theme.white};
  margin-top: 1rem;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;

  header {
    padding: 1.5rem 0.75rem;
    color: ${(props) => props.theme.gray[950]};
    ${mixins.fonts.textPreset3Bold}
  }

  hr {
    border: 1px solid ${(props) => props.theme.gray[100]};
  }

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 375px) {
    position: relative;
    top: 2rem;
  }
`;

export const CartContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 4.625rem - 1px);

  span {
    color: ${(props) => props.theme.gray[500]};
    ${mixins.fonts.textPreset3Bold}
  }
`;
