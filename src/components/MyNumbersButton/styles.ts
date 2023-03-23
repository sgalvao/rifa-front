import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.3rem 1rem;
  background: #c06014;
  border-radius: 0.8rem;
  margin: 1rem;
  svg {
    margin-right: 1rem;
  }
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Title = styled.h1`
  color: #f8f8f8;
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
`;
