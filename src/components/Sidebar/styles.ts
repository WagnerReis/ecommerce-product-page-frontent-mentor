import styled, { keyframes } from "styled-components";
import { mixins } from "../../styles/mixins";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

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
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 300ms ease-in-out
    forwards;
`;

export const SidebarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 301px;
  background-color: ${(props) => props.theme.white};
  z-index: 1000;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  animation: ${(props) => (props.isOpen ? slideIn : slideOut)} 300ms ease-in-out
    forwards;

  padding-top: 3rem;
  padding-left: 5rem;

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.gray[500]};
    font-weight: bold;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 3.5rem;

    a {
      color: ${(props) => props.theme.gray[950]};
      ${mixins.fonts.textPreset3Bold}
      cursor: pointer;
    }
  }

  @media (max-width: 375px) {
    width: 250px;

    padding-top: 1.5rem;
    padding-left: 1.5rem;
  }
`;
