import { gql } from "apollo-boost";

export const getProductsByCategoryQuery = gql`
  query ($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        name
        inStock
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
