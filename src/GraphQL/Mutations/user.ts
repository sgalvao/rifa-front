import { gql } from "@apollo/client";

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
