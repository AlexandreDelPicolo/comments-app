import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SAVE_COMMENT } from "../graphql/comments/comments.mutation";

export default function Form({ onAddComment }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const [addComment] = useMutation(SAVE_COMMENT, {
    variables: {
      input: {
        name,
        content,
      },
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await addComment();
    setName("");
    setContent("");
    onAddComment();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o seu nome"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Digite o seu comentário"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <button type="submit">Comentar</button>
    </form>
  );
}
