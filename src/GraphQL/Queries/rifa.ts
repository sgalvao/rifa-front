import { gql } from "@apollo/client";

export const LOAD_RIFAS = gql`
  query LoadRifas {
    loadRifas {
      authorId
      id
      name
      participants
      price
      status
      winnerNumber
      image
    }
  }
`;

export const LOAD_RIFA = gql`
  query LoadRifa($rifaId: String!) {
    loadRifa(rifaId: $rifaId) {
      authorId
      id
      name
      participants
      price
      soldNumbers
      status
      winnerNumber
      image
    }
  }
`;
