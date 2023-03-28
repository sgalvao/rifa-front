import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(21, 114, 53, 0.39);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Image = styled.div<any>`
  width: 9rem;
  height: 9rem;
  border-radius: 1.8rem;
  margin-right: 1rem;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  color: #157235;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
`;

export const Rifa = styled.span`
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const Date = styled.span`
  color: #000;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
`;

export const Number = styled.div`
  display: flex;
  color: #000;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;

  p {
    border: 1px dashed #157235;
    color: #157235;
    font-weight: bold;

    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    padding: 0 0.8rem;
    border-radius: 0.4rem;
    width: fit-content;
    margin-left: 0.2rem;
  }
`;
