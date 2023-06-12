import styled from "styled-components";

type Props = {
  url?: string;
  isApproved?: boolean;
};

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 1rem;
`;

export const PaymentId = styled.h1`
  font-family: "Poppins", sans-serif;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 300;
  margin: 2rem 0;
`;

export const StatusCard = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${({ isApproved }) => (isApproved ? "green" : "#1b05cf")};
  padding: 1rem;
  width: 100%;
  color: #999999;
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  border-radius: 1rem;
  margin: 1rem 0;

  svg {
    margin-bottom: 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #1b05cf;
`;

export const Date = styled.p`
  color: rgba(0, 0, 0, 0.6);

  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
`;

export const Status = styled.div`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  color: #1b05cf;
  strong {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const Quantity = styled.p`
  color: rgba(0, 0, 0, 0.6);

  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
`;

export const Numbers = styled.p`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  overflow-wrap: break-word;
  color: #1b05cf;

  strong {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const Info = styled.p`
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.6);

  strong {
    color: #1b05cf;
  }
`;

export const Value = styled.p`
  color: #000;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
`;

export const TotalValue = styled.p`
  color: #000;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
`;

export const PixContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 2rem;
`;

export const PixButton = styled.div`
  width: 100%;
  display: flex;
  margin: 0;
  background-color: #3daf3c;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  color: #f8f8f8;
  border-radius: 1rem 1rem 0 0;
  padding: 1rem;
`;

export const PixCard = styled.div<Props>`
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  background-image: url("/img/pix-logo.svg");
  background-size: 9rem;
  background-position: center;
  background-repeat: no-repeat;
  height: 4.5rem;
  border-radius: 0 0 1rem 1rem;
  width: 100%;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 1rem;
  padding: 1rem 0;
  font-size: 1.8rem;
  font-family: "Poppins", sans-serif;
  color: #f8f8f8;
  font-weight: bold;
  background-color: #1b05cf;
  margin: 3rem;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  svg {
    margin-right: 0.5rem;
  }
  transition: 0.2s all ease;

  &:hover {
    background-color: #ad450d;
  }
  cursor: pointer;
`;
