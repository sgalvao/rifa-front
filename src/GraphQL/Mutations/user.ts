import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($user: UserInput) {
    createUser(user: $user) {
      email
      id
      name
      phone
    }
  }
`;
