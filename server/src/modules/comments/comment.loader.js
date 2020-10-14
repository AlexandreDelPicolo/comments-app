import Comment from './comment.model';

export async function saveComment(_, { input }){
    const comment = await Comment.create(input);
    return comment;
}

export async function getComments(){
    const comments = await Comment.find();
    return comments;
}