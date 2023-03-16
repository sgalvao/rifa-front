import styled, { css } from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem;

  input {
    width: 100%;
    height: ${"3.4rem"};
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.6rem;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.8);
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);

      font-family: "Poppins", sans-serif;
    }
    outline: none;
    border-radius: 0.5rem;
    border: none;
    border: 0.1rem solid ${"rgb(83, 97, 98)"};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: ${"3.4rem"};
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.6rem;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.8);
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);

    font-family: "Poppins", sans-serif;
  }
  outline: none;
  border-radius: 0.5rem;
  border: none;
  border: 0.1rem solid ${"rgb(83, 97, 98)"};
`;

export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border-top: 2px solid #f8f8f8;

  animation: spin 0.4s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  color: #f8f8f8;

  p {
    font-size: 0.9rem;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    margin-left: 0.5rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.5rem 0.8rem 1.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  margin: 1rem 0;
  color: #f8f8f8;
  background-color: #c06014;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  outline: none;
  text-align: center;
  height: fit-content;
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  &:hover {
    background-color: #494b4e;
    color: #f8f8f8;
  }
  &:disabled {
    background-color: #494b4e;
  }
`;
