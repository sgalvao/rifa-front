import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
  query login($phone: String!) {
    login(phone: $phone) {
      token
      phone
      name
      id
      email
    }
  }
`;
