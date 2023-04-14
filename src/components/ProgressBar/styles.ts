import styled from "styled-components";

type Props = {
  soldPercent: number;
};

export const Container = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  text-align: center;
  color: #999999;
`;

export const Bar = styled.div`
  padding: 6px;
  background: rgba(248, 248, 248, 0.8);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
    0 1px rgba(255, 255, 255, 0.08);
`;

export const Progress = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b05cf;
  width: ${({ soldPercent }) => soldPercent}%;
  background-image: linear-gradient(
    45deg,
    rgb(113, 99, 231) 25%,
    transparent 25%,
    transparent 50%,
    rgb(113, 99, 231) 50%,
    rgb(113, 99, 231) 75%,
    transparent 75%,
    transparent
  );
  animation: progressAnimationStrike 6s;
  height: 18px;
  border-radius: 4px;
  transition: 0.4s linear;
  transition-property: width, background-color;

  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  color: #f8f8f8;

  @keyframes progressAnimationStrike {
    from {
      width: 0;
    }
    to {
      width: ${({ soldPercent }) => soldPercent}%;
    }
  }
`;
