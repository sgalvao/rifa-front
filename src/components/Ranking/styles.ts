import styled from "styled-components";

type Props = {
  isActive?: boolean;
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

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TabButton = styled.button<Props>`
  border: none;
  padding: 1rem;
  background-color: ${({ isActive }) => (isActive ? "#0e4ce7" : "#f8f8f8")};
  outline: none;
  color: ${({ isActive }) => (isActive ? "#fff" : "#0e4ce7")};
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  border-radius: 0.8rem;
  transition: 0.4s all ease;
`;

export const FirstPlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  width: 100%;
  background-color: #57d482;
  padding: 1rem 0.4rem;

  border-radius: 1rem;
`;
export const SecondPlace = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1rem;
  width: 95%;
  background-color: #57acd4;
  padding: 1rem 0.4rem;

  border-radius: 1rem;
`;
export const ThirdPlace = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 90%;
  background-color: #9c2c1c;
  padding: 1rem 0.4rem;
  border-radius: 1rem;
`;

export const Name = styled.span`
  font-size: 1.4rem;
  color: #fff;
  font-weight: bold;
  font-family: "Poppins", sans-serif;

  strong {
    font-size: 2rem;
  }
`;

export const Count = styled.span`
  font-size: 1.6rem;
  color: #fff;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;
