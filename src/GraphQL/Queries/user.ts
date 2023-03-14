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

export const CREATE_USER_MUTATION = gql`
  mutation CreatePayment($user: UserInput) {
    createUser(user: $user) {
      email
      id
      name
      phone
    }
  }
`;
