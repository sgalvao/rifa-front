import styled from "styled-components";

type Props = {
  isOpen: boolean;
};

export const Container = styled.div<Props>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 8;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  background: #f8f8f8;
  padding: 2rem;
  width: 100%;
  border-radius: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const Overlay = styled.div<Props>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  width: 100vw;
  height: 100vh;
  filter: blur(1px);
  background-color: #000;
`;

export const CloseButton = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 1rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  color: red;
  background-color: #fff;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  margin: 1rem 0;
`;

export const PixContainer = styled.div`
  margin: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Description = styled.span`
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.4rem;

  strong {
    color: #fcbc51;
  }
`;

export const Input = styled.input`
  padding: 0.9rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  font-family: "Poppins", sans-serif;
  border-radius: 1rem 0 0 1rem;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CopyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  outline: none;
  border: none;
  border-radius: 0rem 1rem 1rem 0rem;
  color: #f8f8f8;
  background-color: #47b3ea;
  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #176b96;
  }
`;
