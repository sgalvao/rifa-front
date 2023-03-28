import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 1rem;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  color: #000;
  font-weight: 300;
  font-size: 2.8rem;
  svg {
    fill: #c06014;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 1rem;
  background-color: #f8f8f8;
  padding: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(66, 70, 66, 0.1);
  margin-bottom: 1rem;
`;
