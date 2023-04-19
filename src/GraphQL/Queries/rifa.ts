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
      winnerName
      image
    }
  }
`;

export const LOAD_RIFA = gql`
  query LoadRifa($rifaId: String!) {
    loadRifa(rifaId: $rifaId) {
      id
      name
      price
      authorId
      participants
      status
      winnerNumber
      winnerName
      soldNumbers
      image
      isFinished
      finishedDate
      description
      firstPrize
      secondPrize
      thirdPrize
    }
  }
`;
