import { gql } from "@apollo/client";

export const LOAD_RANKING = gql`
  query LoadRanking($rifaId: String!) {
    loadRanking(rifaId: $rifaId) {
      name
      count
    }
  }
`;
