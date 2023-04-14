import styled, { css } from "styled-components";

type Props = {
  popular?: boolean;
};

export const AddMoreCard = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  padding: 2rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
  height: 8rem;
  border: 2px solid #1b05cf;
  border-radius: 1rem;
  color: #1b05cf;
  font-weight: bold;
  background-color: rgba(223, 211, 227, 0.5);

  cursor: pointer;

  ${({ popular }) =>
    popular &&
    css`
      border: 2px solid #1b05cf;
      border-radius: 1rem;
      color: #fff;
      background: #1b05cf;
      font-weight: bold;
    `}
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const PopularCard = styled.div`
  padding: 0 1rem;
  position: absolute;
  top: -1rem;
  border: 1px solid #1b05cf;
  border-radius: 0.6rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  color: rgba(243, 244, 237, 1);
  background: rgba(113, 99, 231);
`;
