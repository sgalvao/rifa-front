import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.4rem;
  border-radius: 1rem;
  background-color: #f8f8f8;
`;

export const FinishedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #28ad09;
  border-radius: 0.8rem;
  padding: 1rem;
`;

export const Info = styled.span`
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-size: 1.2rem;

  strong {
    color: #ff650e;
  }
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

  width: 100%;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  border: 1px dashed #ff650e;
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: #000000;
`;

export const DescriptionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: #000000;
`;

export const ImageContainer = styled.div<any>`
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 36.2rem;
  border-radius: 1.9rem;
`;

export const RifaContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
`;

export const Price = styled.h2`
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: #ff650e;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
`;

export const ReturnButton = styled.div`
  svg {
    width: 3rem;
    margin: 1rem 0;
  }
`;
