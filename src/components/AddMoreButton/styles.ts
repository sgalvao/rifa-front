import styled, { css } from "styled-components";

type Props = {
  popular?: boolean;
};

export const AddMoreCard = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 1.8rem;
  padding: 2rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
  height: 8rem;
  color: #1b05cf;
  font-weight: bold;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1rem;

  cursor: pointer;

  ${({ popular }) =>
    popular &&
    css`
      border-radius: 1rem;
      color: #1b05cf;
      font-weight: bold;
      border: 1px solid #1b05cf;
    `}
`;

export const PopularCard = styled.div`
  padding: 0 1rem;
  position: absolute;
  top: -1rem;
  border-radius: 0.6rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  color: rgba(243, 244, 237, 1);
  border: 1px solid #1b05cf;
  background-color: #1b05cf;
`;
