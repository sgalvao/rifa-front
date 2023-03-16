import styled from "styled-components";
import media from "styled-media-query";

type Props = {
  isConnected?: boolean;
};

export const Container = styled.div`
  display: flex;
  max-width: 130rem;
  width: 100%;
  max-height: 16rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 0 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.02);
`;

export const Logo = styled.div``;

export const Image = styled.img<any>`
  max-width: 20rem;
`;

export const Divider = styled.div`
  width: 1px;
  height: 2rem;
  margin-right: 1.2rem;
  background-color: rgb(243, 244, 237, 0.3);
  ${media.lessThan("medium")`
    display: none;
    `}
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: rgb(243, 244, 237, 0.3);
  font-family: "Poppins", sans-serif;
  ${media.lessThan("medium")`
    display: none;
    `}
`;

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  flex: 0;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  border-radius: 32px;
  color: rgb(255, 255, 255);
  width: 30rem;
  max-width: min-content;
  background: rgb(34, 106, 237);
  transition: all 0.1s ease-in-out 0s;
  svg {
    margin-left: 1rem;
    ${media.lessThan("medium")`
    width: 4rem;
    height: 4rem;
    margin: 0;
    `}
  }
  p {
    font-size: 1.8rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: ${({ isConnected }) => isConnected && "10rem"};
    ${media.lessThan("medium")`
    display: none;
    `}
  }
`;

export const MenuButton = styled.div`
  svg {
    fill: #f3f4ed;
  }
`;
