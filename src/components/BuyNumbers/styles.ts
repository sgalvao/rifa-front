import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  border: none;
  align-items: center;
  justify-content: center;
  background: green;
  font-family: "Inter", sans-serif;
  font-size: 1.4rem;
  padding: 1rem;
  border-radius: 1rem;
  color: #f8f8f8;
  cursor: pointer;
  font-weight: 800;
`;

export const Spinner = styled.div``;
