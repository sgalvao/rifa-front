import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    width: 26rem;
    height: 26rem;
    opacity: 0.8;
  }
`;

export const Info = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;

  strong {
    color: #f7cd6e;
  }
`;

export const Title = styled.h1`
  color: rgba(0, 0, 0, 0.8);
  font-family: "Poppins", sans-serif;
`;
