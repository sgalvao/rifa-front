import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    width: 26rem;
    height: 26rem;
    opacity: 0.6;
  }
`;

export const Info = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;

export const Title = styled.h1`
  color: #f8f8f8;
  font-family: "Poppins", sans-serif;
`;
