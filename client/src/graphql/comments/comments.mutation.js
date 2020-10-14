import { gql } from "apollo-boost";

const SAVE_COMMENT = gql`
  mutation save($input: CommentInput) {
    saveComment(input: $input) {
      id
    }
  }
`;

const DELETE_COMMENTS = gql`
  mutation DeleteComment($id: String!) {
    deleteComments(id: $id) {
      id
    }
  }
`;

export {
  SAVE_COMMENT,
  DELETE_COMMENTS
};

