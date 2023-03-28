import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`;

export const Input = styled.input`
  outline: none;
  background: transparent;
  border: none;
  border-radius: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  margin: 1rem 0;
  color: #7a4f27;
`;

export const Button = styled.button`
  color: #c06014;
  background: transparent;
  outline: none;
  border: none;

  &:disabled {
    color: #f3f4ed;
  }
`;
