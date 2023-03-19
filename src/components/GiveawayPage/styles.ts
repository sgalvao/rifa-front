import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.4rem;
  border-radius: 1rem;
  background: #536162;
`;

export const FinishedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #28ad09;
  border-radius: 0.8rem;
  padding: 1rem;
`;

export const WinnerName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  color: #f8f8f8;
`;

export const WinnerNumber = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  color: #f8f8f8;
`;
export const Date = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: #f8f8f8;
`;
