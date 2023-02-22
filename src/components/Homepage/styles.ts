import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
  max-width: 60rem;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  color: #f3f4ed;
  margin-bottom: 1rem;
  svg {
    fill: #c06014;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #536162;
  border-radius: 1rem;
  padding: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(66, 70, 66, 0.1);
  margin-bottom: 1rem;
`;
