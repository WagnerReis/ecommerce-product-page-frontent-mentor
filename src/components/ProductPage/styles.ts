import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.main`
  width: calc(100% - (2.78125rem * 2));
  height: 35.3125rem;
  margin: 6rem auto;

  /* border: 1px solid red; */

  display: flex;
  gap: 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: calc(100% - (2.78125rem * 2));
    height: auto;
    gap: 2rem;
  }
`;

export const ImagesContainer = styled.div`
  min-width: 28rem;
  height: 100%;

  border: 1px solid purple;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 27rem;

  margin: auto 0;

  /* border: 1px solid green; */

  h1 {
    color: ${(props) => props.theme.gray[500]};
    ${mixins.fonts.textPreset5}
  }

  h2 {
    margin-top: 1.5rem;
    color: ${(props) => props.theme.gray[950]};
    ${mixins.fonts.textPreset1}
  }

  p {
    margin-top: 2rem;
    color: ${(props) => props.theme.gray[500]};
    ${mixins.fonts.textPreset3Regular}
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  /* border: 1px solid black; */

  margin-top: 2rem;
  margin-bottom: 2rem;

  .discount {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.gray[950]};
    ${mixins.fonts.textPreset3Bold}
    padding: 0 0.5rem;
    border-radius: 0.25rem;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span:first-child {
    color: ${(props) => props.theme.gray[950]};
    ${mixins.fonts.textPreset2}
  }

  span:last-child {
    color: ${(props) => props.theme.gray[500]};
    ${mixins.fonts.textPreset3Bold};
    text-decoration: line-through;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 3.5rem;
  cursor: pointer;
  border-radius: 12px;
  border: none;

  background: ${(props) => props.theme.orange[300]};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    background: ${(props) => props.theme.orange[500]};
    transition: background-color 0.1s;
  }

  span {
    color: ${(props) => props.theme.gray[950]};
    ${mixins.fonts.textPreset3Bold}
  }

  svg {
    color: ${(props) => props.theme.gray[950]};
  }
`;
