import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries($name: String) {
  countries(filter: { name: { regex: $name } }) {
    name
    capital
    emoji
    continent {
      name
    }
    languages {
      name
    }
    currencies
  }
}
`;
