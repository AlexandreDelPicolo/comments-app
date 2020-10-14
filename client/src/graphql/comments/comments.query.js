import { gql } from "apollo-boost";

const GET_COMMENTS = gql`
  query {
    getComments {
      id
      name
      content
    }
  }
`;

export {
  GET_COMMENTS
};
