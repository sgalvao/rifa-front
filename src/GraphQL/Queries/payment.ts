import { gql } from "@apollo/client";

export const LOAD_PAYMENT_BY_ID = gql`
  query LoadPaymentById($id: String) {
    loadPaymentById(id: $id) {
      copyPasteCode
      id
      numbers
      ownerId
      quantity
      rifaId
      totalValue
      value
      transactionId
      createdAt
    }
  }
`;
