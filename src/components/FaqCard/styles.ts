import styled from "styled-components";

type Props = {
  isOpen?: boolean;
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 2rem;
`;

export const Content = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  background-color: #e8e7e7;
  width: 100%;
  border-radius: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;

  svg {
    transform: ${({ isOpen }) => (isOpen ? "rotate(-90deg)" : "rotate(90deg)")};
    transition: 0.2s all ease-in;
  }
`;

export const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
`;

export const ExpandIcon = styled.div``;

export const ContentCard = styled.div<Props>`
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  border-radius: 0 0 1rem 1rem;

  animation: slideIn 1s ease;

  @keyframes slideIn {
    from {
      transform: translateY(-20%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
    }
  }
`;

export const Text = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
`;
