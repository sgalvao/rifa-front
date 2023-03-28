import styled from "styled-components";

type Props = {
  isDanger: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all 1s ease-in;
`;

export const Counter = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999999;
  font-size: 2.4rem;
  border-radius: 1rem;
  padding: 0.4rem 2rem;
  font-weight: bold;
  width: 100%;

  ${({ isDanger }) =>
    isDanger ? "animation: 1s showIn linear infinite;" : null}

  @keyframes showIn {
    50% {
      opacity: 0;
    }
  }
`;

export const Expired = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #f8f8f8;
  text-align: center;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  background-color: #c17f04;
  margin: 1rem;
  cursor: pointer;
`;
