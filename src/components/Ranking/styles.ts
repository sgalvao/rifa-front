import styled from "styled-components";
import media from "styled-media-query";

type Props = {
  isActive?: boolean;
};

type PlaceProps = {
  size?: number;
  color: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 100%;
  background-color: #ffff;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;

export const PrizeCard = styled.div<PlaceProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  align-items: center;
  border-radius: 1rem;
  padding: 0.6rem 0;
  margin-top: 1rem;
`;

export const PrizeValue = styled.span`
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #fff;
`;

export const PrizePosition = styled.span`
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #fff;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`;

export const TabButton = styled.button<Props>`
  border: none;
  padding: 1rem;
  background-color: ${({ isActive }) => (isActive ? "#0e4ce7" : "#DFE0E1")};
  outline: none;
  color: ${({ isActive }) => (isActive ? "#fff" : "#0e4ce7")};
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  border-radius: 0.8rem;
  transition: 0.4s all ease;
`;

export const PodiumCard = styled.div<PlaceProps>`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: ${({ size }) => (size ? size : 100)}%;
  background-color: ${({ color }) => color};
  padding: 0.6rem 1rem;

  border-radius: 1rem;
`;

export const Name = styled.span`
  font-size: 1.4rem;
  color: #fff;
  font-weight: bold;
  font-family: "Poppins", sans-serif;

  strong {
    font-size: 1.8rem;
  }
`;

export const Count = styled.span`
  font-size: 1.3rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-align: center;

  ${media.greaterThan("medium")`
   text-align: start;
    font-size: 1.6rem;
  `}
`;
