import styled from "styled-components";

type Props = {
  isOpen?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  border-radius: 1.2rem;
  background: rgba(66, 70, 66, 0.7);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 1rem;
`;

export const RifaImage = styled.div`
  width: 100%;
  height: 20rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1.2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem 1rem;
`;

export const Name = styled.p`
  font-family: "Poppins", sans-serif;
  color: #f3f4ed;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  color: #fff;
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
  background: #c06014;
  padding: 0.4rem 1rem;
  border-radius: 0.8rem;
  animation: 1.8s showIn linear infinite;

  @keyframes showIn {
    50% {
      opacity: 0;
    }
  }
`;

export const Price = styled.p`
  color: #f3f4ed;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
`;

export const Button = styled.button``;
