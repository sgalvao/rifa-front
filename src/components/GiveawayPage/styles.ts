import Image from "next/image";
import styled from "styled-components";
import media from "styled-media-query";

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
  margin-top: 1rem;

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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  margin: 1rem;
  align-items: center;
`;

export const Status = styled.div<any>`
  display: flex;
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

export const CardImage = styled(Image)`
  border-radius: 1.2rem;
  max-width: 100%;
`

export const CardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 580px;

  ${media.lessThan("small")`
    height: 300px;
  `}
`