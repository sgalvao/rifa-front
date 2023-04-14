import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.4rem;
  border-radius: 1rem;
  background-color: #f8f8f8;
  overflow-x: hidden;

  ${media.lessThan("medium")`
  max-width: 40rem;
  
  `}
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
  font-size: 1.4rem;

  strong {
    color: #1b05cf;
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
  border: 1px dashed #1b05cf;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  margin: 1rem;
  align-items: center;
`;

export const FaqTitle = styled.h2`
  color: #1b05cf;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  margin-top: 2rem;
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
  position: relative;

  ${media.lessThan("medium")`
  max-width: 36.2rem;
  
  `}
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
  color: white;
  background-color: #1b05cf;
  padding: 0.3rem 1rem;
  border-radius: 1rem;
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

export const Status = styled.div<any>`
  display: flex;
  position: absolute;
  bottom: 0px;
  right: 33%;
  left: 33%;
  align-items: center;
  justify-content: center;
  color: #f8f8f8;
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  background: ${({ status }) => (status === "OPEN" ? "green" : "#303240")};
  padding: 0.2rem 0.6rem;
  border-radius: 0.8rem;
  ${({ status }) =>
    status === "OPEN" && "animation: 1.6s showIn linear infinite;"}

  @keyframes showIn {
    50% {
      opacity: 0;
    }
  }
`;
