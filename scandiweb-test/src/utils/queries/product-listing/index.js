import { gql } from "apollo-boost";

export const getProductsByCategoryQuery = gql`
  query ($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        name
        brand
        inStock
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
  }
`;
