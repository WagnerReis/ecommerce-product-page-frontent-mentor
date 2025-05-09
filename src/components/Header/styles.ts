import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  height: 5.1875rem;

  @media (max-width: 768px) {
    margin: 0 3rem;
  }

  @media (max-width: 480px) {
    margin: 0 1.25rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const UserActionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 110%;
  gap: 3rem;

  @media (max-width: 480px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    height: 30px;
    align-items: center;
  }
`;

export const UserProfile = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    border: 2px solid ${({ theme }) => theme.orange[500]};
    transition: border-color 0.2s;
  }

  @media (max-width: 480px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const CartContainer = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background: transparent;

  margin-top: 7px;

  svg {
    color: ${({ theme }) => theme.gray[300]};

    &:hover {
      color: ${({ theme }) => theme.gray[950]};
      transition: color 0.1s;
    }
  }

  span {
    position: absolute;
    top: -0.2rem;
    right: -0.4rem;
    width: 19px;
    height: 13px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.orange[500]};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    line-height: auto;
    letter-spacing: 0;
  }

  @media (max-width: 480px) {
    svg {
      width: 28px;
      height: 20px;

      margin-top: 10px;
    }

    span {
      position: absolute;
      top: 0.3rem;
      right: -0.4rem;
    }
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  height: 100%;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  img {
    height: 24px;
  }

  nav {
    display: flex;
    gap: 1rem;
    flex: 1;
  }

  a {
    color: ${({ theme }) => theme.gray[500]};
    ${mixins.fonts.textPreset4}
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.gray[950]};
      transition: color 0.2s;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    img {
      height: 1.25rem;
      width: 8.5rem;
    }
  }
`;

export const HeaderDivisor = styled.hr`
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.gray[300]};
  padding: 0;
`;
