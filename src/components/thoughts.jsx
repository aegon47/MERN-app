import React, { useState } from "react";
import { Thought } from "./thought";

export const Thoughts = ({ items }) => {
  const [like, setLike] = useState(0);

  const likeThought = () => {
    setLike((like += 1));
  };
  return (
    <div style={{ alignContent: "center" }}>
      <Thought items={items} />
      <button onClick={likeThought}></button>
    </div>
  );
};
