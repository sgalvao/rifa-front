import styled from "styled-components";

export const Modal = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 4rem;
  background-color: #424642;
  border-radius: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
