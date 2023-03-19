import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #424642;
  padding: 1rem;
  border-radius: 1.2rem;
  margin-top: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 1rem;
`;

export const ImageContainer = styled.div<any>`
  min-width: 7rem;
  height: 7rem;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1rem;
`;

export const Name = styled.h2`
  display: block;
  display: -webkit-box;
  color: #f8f8f8;
  font-family: "Poppins", sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Status = styled.div<any>`
  align-self: flex-end;
  color: #f8f8f8;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 1.4rem;
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
  border: 1px solid #c06014;
  border-radius: 1rem;
  padding: 1rem 0.4rem;
  overflow-x: hidden;
`;

export const Number = styled.div`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  overflow-wrap: break-word;
  color: #f7cd6e;
  border: 1px solid #f7cd6e;
  border-radius: 0.4rem;
  padding: 0.2rem;
`;
