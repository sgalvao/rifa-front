import styled from "styled-components";
import Image from "next/image";

type Props = {
  url?: string;
};

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;

export const CardImage = styled.div<Props>`
  border-radius: 1.9rem;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 13.8rem;
  height: 15.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  color: #000;
  font-size: 1rem;
`;

export const Price = styled.p`
  color: #000;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
`;

export const Status = styled.div<any>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  color: #f8f8f8;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  background: ${({ status }) => (status === "OPEN" ? "#c06014" : "#303240")};
  padding: 0.2rem 0.6rem;
  border-radius: 0.8rem;
`;
