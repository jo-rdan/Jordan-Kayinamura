import { gql } from "apollo-boost";

export const getProduct = gql`
  query ($id: String!) {
    product(id: $id) {
      name
      brand
      description
      attributes {
        id
        name
        type
        items {
          id
          displayValue
          value
        }
      }
      prices {
        currency {
          symbol
        }
        amount
      }
      gallery
    }
  }
`;
