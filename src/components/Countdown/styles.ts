import styled from "styled-components";

export const ProgressBar = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  height: 20px;
  background-color: #f44336;
`;

export const Timer = styled.div`
  font-size: 2rem;
  text-align: center;
`;

export const TimerValue = styled.span`
  font-weight: bold;
`;

export const TimerLabel = styled.span`
  font-weight: normal;
`;
