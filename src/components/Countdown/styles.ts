import styled from "styled-components";

export const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 0.6rem;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  padding: 0;
  margin: 0;
`;

export const ProgressBar = styled.div<{ width: number }>`
  position: absolute;
  width: ${({ width }) => width}%;
  height: 100%;
  left: 0;
  background-color: #c06014;
  border-radius: 0.6rem;
  z-index: 1;
  padding: 0;
`;

export const Timer = styled.div`
  position: relative;
  font-size: 2rem;
  text-align: center;
  z-index: 2;
`;

export const TimerValue = styled.span`
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: #f8f8f8;
  padding: 0;
  margin: 0;
`;

export const TimerLabel = styled.span`
  font-weight: normal;
`;
