import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const Grid = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 2rem 4rem;
`;

export const Price = styled.button`
  display: flex;
  outline: none;
  border: 0px solid;
  align-items: center;
  justify-content: center;
  background: #84e615;
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  padding: 1rem;
  border-radius: 0.6rem;
  color: #f8f8f8;
  cursor: pointer;
  font-weight: 800;
  box-shadow: 0 0 0 0;
  animation: scaleIn 1.2s infinite;

  @keyframes scaleIn {
    0% {
      transform: scale(0.93);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0px 7px 2px rgba(132, 230, 21, 0.7);
    }
    100% {
      transform: scale(0.93);
      box-shadow: 0 0 0 0 rgba(132, 230, 21, 0.3);
    }
  }
`;

export const Spinner = styled.div`
  width: 2rem;
  height: 2rem;
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
