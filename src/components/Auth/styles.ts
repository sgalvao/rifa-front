import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f8f8f8;
  width: 100%;
  margin: 2rem;
  padding: 2rem;
  border-radius: 1.6rem;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  color: rgba(0, 0, 0, 0.8);
`;

export const Alert = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  padding: 1rem;
  background-color: rgba(174, 243, 172, 0.39);
  border-radius: 1rem;
  border: 1px dashed #24b602;

  svg {
    margin-right: 1rem;
  }
`;
