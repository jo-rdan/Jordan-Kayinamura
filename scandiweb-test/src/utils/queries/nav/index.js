import { gql } from "apollo-boost";

export const getCategories = gql`
  {
    categories {
      name
    }
  }
`;

export const getCurrencies = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;
