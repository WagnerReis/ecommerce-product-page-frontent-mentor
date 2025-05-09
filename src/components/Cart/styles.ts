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

  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;

  span {
    color: ${(props) => props.theme.gray[500]};
    ${mixins.fonts.textPreset3Bold}
  }

  button {
    width: 100%;
    background: ${(props) => props.theme.orange[500]};
    border: none;
    color: ${(props) => props.theme.gray[950]};
    ${mixins.fonts.textPreset3Bold}
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
      transition: opacity 0.1s;
    }
  }
`;

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  gap: 1.5rem;

  div {
    display: flex;
    gap: 1rem;
  }

  img {
    width: 3.125rem;
    height: 3.125rem;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const Resume = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: ${(props) => props.theme.gray[500]};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.orange[500]};
      transition: color 0.1s;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3.125rem;

  h3 {
    color: ${(props) => props.theme.gray[500]};
    ${mixins.fonts.textPreset3Regular};
    margin: 0;
  }

  div:first-child {
    margin-bottom: -1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    padding: 0;

    span {
      color: ${(props) => props.theme.gray[500]};
      ${mixins.fonts.textPreset3Regular}
    }

    strong {
      color: ${(props) => props.theme.gray[950]};
      ${mixins.fonts.textPreset3Bold}
    }
  }
`;
