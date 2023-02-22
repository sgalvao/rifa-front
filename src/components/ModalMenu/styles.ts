import styled from "styled-components";
import media from "styled-media-query";

interface Props {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  padding: 2rem 1rem;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  background-color: #424642;
  animation: slideIn 0.2s ease-in;
  @keyframes slideIn {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.2;
    }
    40% {
      opacity: 0.4;
    }
    60% {
      opacity: 0.6;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.6rem;
  color: #f3f4ed;
  font-weight: normal;
  font-family: "Poppins", sans-serif;
  svg {
    fill: #c06014;
    margin-right: 1rem;
  }
  ${media.lessThan("medium")`
    font-size:1.6rem;
    `}
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #fff;
  margin: 0;
  padding: 1rem;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 1px solid #f3f4ed;
  background: transparent;
  border-radius: 50%;
  transition: all 0.2s ease-in;
  padding: 1rem;

  svg {
    fill: #f3f4ed;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid #536162;

    svg {
      fill: #536162;
    }
  }
`;

export const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  font-size: 2rem;
  color: #f3f4ed;
  margin: 1rem 0;

  svg {
    margin-right: 1rem;
  }

  &:hover {
    cursor: pointer;
    color: #536162;
  }

  animation: slideRight 0.6s ease-in-out;
  transition: all 0.2s ease-in;
  @keyframes slideRight {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0%);
    }
  }
`;
