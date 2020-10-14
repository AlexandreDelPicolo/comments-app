import { GraphQLString, GraphQLList, GraphQLNonNull, GraphQLInputObjectType } from 'graphql';

import CommentType from './comment.type';
import { getComments, saveComment } from './comment.loader';

export const queries = {
  getComments: {
    type: GraphQLList(CommentType),
    resolve: getComments
  }
};

export const mutations = {
  saveComment: {
    type: CommentType,
    resolve: saveComment,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'CommentInput',
          fields: {
            name: {
              type: GraphQLNonNull(GraphQLString)
            },
            content: {
              type: GraphQLNonNull(GraphQLString)
            }
          }
        })
      }
    }
  }
};