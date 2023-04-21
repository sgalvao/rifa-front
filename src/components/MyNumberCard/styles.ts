import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  border-radius: 1.9rem;
  padding: 1rem 0.4rem;
  border: 1px solid rgba(27, 5, 207, 0.5);
  margin-top: 1rem;
  background-color: #f8f8f8;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const ImageContainer = styled.img<any>`
  position: relative;
  width: 10rem;
  height: 10rem;
  border-radius: 1.9rem;
`;

export const Name = styled.h2`
  display: block;
  display: -webkit-box;
  color: #000;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Status = styled.div<any>`
  position: absolute;
  top: -5%;
  left: 0;
  align-self: flex-end;
  color: #f8f8f8;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 0.9rem;
  padding: 0.4rem;
  margin-top: 1rem;
  ${({ status }) => css`
    background-color: ${status === "OPEN" ? "#C06014" : "#536162"};
    border-radius: 0.6rem;
  `}
`;

export const NumberContainer = styled.div`
  width: 100%;
  max-height: 12rem;
  display: grid;
  grid-template-columns: repeat(5, 6fr);
  gap: 0.4rem;
  border-radius: 1rem;
  padding: 1rem 0.4rem;
  overflow-x: hidden;
`;

export const Number = styled.div`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  overflow-wrap: break-word;
  color: #1b05cf;
  border: 1px dashed #1b05cf;
  border-radius: 0.4rem;
  padding: 0.2rem;
`;
