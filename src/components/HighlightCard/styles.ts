import styled, { css } from "styled-components";

type Props = {
  status?: string;
  url?: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  width: 100%;
  border-radius: 1.8rem;
  margin-bottom: 1rem;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid rgba(27, 5, 207, 0.2);
`;

export const RifaImage = styled.div<Props>`
  width: 100%;
  height: 26.4rem;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1.9rem;
  align-self: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.6rem 2rem;
`;

export const Name = styled.p`
  font-family: "Poppins", sans-serif;
  color: #000;
  font-size: 1.2rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Status = styled.div<Props>`
  ${({ status }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    color: #fff;
    font-size: 1.1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    background: ${status === "OPEN" ? "#c06014" : "#303240"};
    padding: 0.4rem 1rem;
    border-radius: 0.8rem;
    ${status === "OPEN" ? " animation: 1.8s showIn linear infinite;" : null}

    @keyframes showIn {
      50% {
        opacity: 0;
      }
    }
  `}
`;

export const Price = styled.p`
  color: #1b05cf;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
`;
