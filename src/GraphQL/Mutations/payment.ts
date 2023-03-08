import { gql } from "@apollo/client";

export const CREATE_PAYMENT = gql`
  mutation CreatePayment($quantity: Int!, $rifaId: String!) {
    createPayment(quantity: $quantity, rifaId: $rifaId) {
      numbers
      ownerId
      quantity
      rifaId
      transactionId
      id
      copyPasteCode
      totalValue
      value
    }
  }
`;
