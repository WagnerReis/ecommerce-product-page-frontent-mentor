import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
`;

export const Overlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: black;
  opacity: 0.5;
  z-index: 999;
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 100ms ease-in-out
    forwards;
`;

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 34.375rem;
  min-height: 45.125rem;

  .close-icon {
    margin-left: calc(100% - 24px);
    cursor: pointer;

    color: ${(props) => props.theme.white};
  }
`;

export const MainImage = styled.div`
  display: flex;
  position: relative;
  margin-top: 1.5rem;

  cursor: pointer;

  button {
    background: none;
    border: none;
    cursor: pointer;

    width: 3.5rem;
    height: 3.5rem;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    color: ${(props) => props.theme.gray[950]};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${(props) => props.theme.orange[500]};
      transition: color 0.1s ease-in-out;
    }
  }

  button:first-child {
    left: -1.5rem;
  }

  button:last-child {
    right: -1.5rem;
  }

  img {
    width: 34.375rem;
    height: 34.375rem;
    object-fit: cover;

    border-radius: 12px;
  }
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2.5rem;
`;

export const Thumbnail = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>`
  width: 5.5rem;
  height: 5.5rem;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  transition: filter 0.1s ease;
  transform: ${(props) => (props.selected ? "scale(1.05)" : "scale(1)")};
  filter: ${(props) =>
    props.selected ? "brightness(1.3) saturate(1.1)" : "none"};

  &:hover {
    filter: brightness(1.3) saturate(1.1);
    transform: scale(1.05);
  }
`;
