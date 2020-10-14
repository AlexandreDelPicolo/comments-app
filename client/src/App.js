import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import "./App.css";

import Comment from "./components/Comment";
import Form from "./components/Form";

import { DELETE_COMMENTS } from "./graphql/comments/comments.mutation";
import { GET_COMMENTS } from "./graphql/comments/comments.query";


export default function App() {
  const { loading, error, data, refetch } = useQuery(GET_COMMENTS);
  const [deleteComment] = useMutation(DELETE_COMMENTS);

  if (error) return "Pô, deu ruim demais.";

  function handleAddComment() {
    refetch();
  }

  function handleDelete(id) {
    deleteComment({ variables: { id } });
    refetch();
  }
  return (
    <>
      <h1>RocketComments</h1>
      <Form onAddComment={handleAddComment} />
      {loading ? (
        "Carregando..."
      ) : (
          <section className="comments">
            {data.getComments.map(({ id, name, content }) => (
              <Comment
                key={id}
                id={id}
                name={name}
                description={content}
                onClick={handleDelete}
              />
            ))}
          </section>
        )}
    </>
  );
}
