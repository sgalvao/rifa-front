import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.4rem;
  border-radius: 1rem;
  background: #536162;
`;

export const FinishedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #28ad09;
  border-radius: 0.8rem;
  padding: 1rem;
`;

export const WinnerName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  color: #f8f8f8;
`;

export const WinnerNumber = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  color: #f8f8f8;
`;
export const Date = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: #f8f8f8;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  width: 100%;
  border-radius: 1rem;
  padding: 1rem;
  max-height: 18rem;
  overflow-y: scroll;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: #f8f8f8;
`;

export const DescriptionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: #f8f8f8;
`;
