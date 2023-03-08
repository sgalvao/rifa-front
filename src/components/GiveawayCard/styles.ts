import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  border-radius: 1.2rem;
  padding: 1rem;
  background: rgba(66, 70, 66, 0.7);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 1rem;
`;

export const Image = styled.div`
  width: 8rem;
  height: 8rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1.2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 1.2rem 0 1.2rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  color: #f3f4ed;
  font-size: 1.2rem;
`;

export const Price = styled.p`
  color: #f3f4ed;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  color: #f8f8f8;
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  background: #c06014;
  padding: 0.2rem 0.8rem;
  border-radius: 0.8rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: rgba(49, 144, 59, 0.9);
  border: 1px solid rgba(49, 144, 59, 0.9);
  border-radius: 1rem;
  padding: 0.5rem;

  &:hover {
    color: #f3f4ed;
    border: 1px solid rgba(49, 144, 59, 0.9);
    background: rgba(49, 144, 59, 0.9);
  }
`;
