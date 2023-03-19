import { gql } from "@apollo/client";

export const LOAD_WINNERS = gql`
  query LoadWinners {
    loadWinners {
      rifaId
      rifaImage
      rifaName
      winnerId
      winnerName
      winnerNumber
      createdAt
    }
  }
`;
