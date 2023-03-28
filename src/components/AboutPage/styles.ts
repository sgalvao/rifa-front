import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  border-radius: 1rem;
  border: 2px dashed #c06014;
  margin: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  color: #000;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
`;

export const SubTitle = styled.h2`
  font-size: 2.2rem;
  color: #000;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
`;

export const RuleList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  list-style: decimal;
`;

export const ListItem = styled.li`
  color: #000;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin: 1rem 0;
`;

export const Text = styled.span`
  font-size: 1.2rem;
  color: #000;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  margin-bottom: 1rem;

  a {
    color: #c06014;
    font-weight: bold;
    text-decoration: none;
  }
`;
