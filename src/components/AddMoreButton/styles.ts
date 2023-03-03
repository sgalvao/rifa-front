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
  border: 2px solid rgba(192, 96, 20, 0.6);
  border-radius: 1rem;
  color: rgba(243, 244, 237, 0.6);

  ${({ popular }) =>
    popular &&
    css`
      border: 2px solid green;
      border-radius: 1rem;
      color: rgba(83, 97, 98, 1);
      background: rgba(243, 244, 237, 0.8);
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
  border: 1px solid green;
  border-radius: 0.6rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  color: rgba(243, 244, 237, 1);
  background: green;
`;
