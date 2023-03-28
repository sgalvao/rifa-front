import styled from "styled-components";

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  margin-top: 2rem;
  padding: 0.8rem;
  width: 100%;
  max-width: 60rem;
  background-color: #ffff;
  border-top: 1px solid rgba(0, 0, 0, 0.29);
  margin: 0 2rem;
`;

export const Item = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ isActive }) => (isActive ? "#F29D38" : "#999999")};
  transition: all 1s ease-in;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
