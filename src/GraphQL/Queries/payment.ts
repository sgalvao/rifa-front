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


export const LOAD_PURCHASED_NUMBERS = gql`
  query LoadPurchasedNumbers {
    loadPurchasedNumbers {
      numbers
      rifaId
      image
      name
      status
    }
  }
`;