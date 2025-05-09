import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.main`
  width: calc(100% - (2.78125rem * 2));
  height: 100%;
  margin-top: 6rem;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  gap: 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: calc(100% - (2.78125rem * 2));
    height: auto;
    gap: 2rem;

    margin: 3rem auto;
  }

  @media (max-width: 375px) {
    width: 100%;
    margin: 0;
    gap: 1rem;
    margin-bottom: 100px;
  }
`;

export const ImagesContainer = styled.div`
  min-width: 28rem;
  height: 100%;

  overflow: hidden;
  object-fit: cover;

  display: flex;
  flex-direction: column;

  img {
    width: 448px;
    height: 445px;
    object-fit: cover;
    border-radius: 12px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    img {
      width: 100vw;
      height: 290px;
    }
  }

  @media (max-width: 375px) {
    min-width: 100%;

    img {
      height: 300px;
      border-radius: 0;
    }
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 27rem;

  margin: auto 0;

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

  @media (max-width: 375px) {
    padding: 1.5rem;
    padding-bottom: 2rem;

    h1 {
      ${mixins.fonts.textPreset6}
    }

    h2 {
      margin-top: 1rem;
      ${mixins.fonts.textPreset2}
    }

    p {
      margin-top: 1rem;
      ${mixins.fonts.textPreset4}
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

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

  @media (max-width: 768px) {
    gap: 1rem;

    div {
      width: 100%;
    }
  }

  @media (max-width: 375px) {
    flex-direction: column;
    gap: 1rem;

    div {
      width: 100%;
    }
  }
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

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 2rem;

  margin-top: 2rem;

  img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
      filter: brightness(1.1) saturate(1.1);
    }
  }
`;
