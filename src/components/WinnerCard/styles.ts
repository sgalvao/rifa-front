import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #424642;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  max-width: 6rem;
  height: 6rem;
  border-radius: 0.8rem;
  margin-right: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  color: #f8f8f8;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
`;

export const Rifa = styled.span`
  color: #f8f8f8;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
`;

export const Date = styled.span`
  color: #f8f8f8;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
`;

export const Number = styled.div`
  display: flex;
  color: #f8f8f8;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;

  p {
    border: 1px dashed #c06014;
    color: #c06014;
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    padding: 0 0.2rem;
    border-radius: 0.2rem;
    width: fit-content;
    margin-left: 0.2rem;
  }
`;
