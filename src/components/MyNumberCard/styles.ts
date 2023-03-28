import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 1.9rem;
  padding: 1rem 0.4rem;
  border: 1px solid rgba(242, 157, 56, 0.5);
  margin-top: 1rem;
  background-color: #f8f8f8;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div<any>`
  position: relative;
  width: 13.8rem;
  height: 15.5rem;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
  bottom: 0%;
  right: 0;
  align-self: flex-end;
  color: #f8f8f8;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 1rem;
  padding: 0.6rem;
  margin-top: 1rem;
  ${({ status }) => css`
    background-color: ${status === "OPEN" ? "#C06014" : "#536162"};
    border-radius: 1rem;
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
  color: #f29d38;
  border: 1px dashed #f29d38;
  border-radius: 0.4rem;
  padding: 0.2rem;
`;
