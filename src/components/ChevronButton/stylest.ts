import styled from "styled-components";

export const Button = styled.button`
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

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
