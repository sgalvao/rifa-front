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
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
  color: #1b05cf;
`;

export const Button = styled.button`
  color: #1b05cf;
  background: transparent;
  outline: none;
  border: none;

  &:disabled {
    color: #f3f4ed;
  }
`;
