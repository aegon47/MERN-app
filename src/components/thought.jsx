import React, { useState } from "react";
import "./thought.css";
export const Thought = ({ name, thought, date }) => {
  // var [likee, setLike] = useState(0);

  // const likeThought = () => {
  //   setLike((likee += 1));
  // };

  return (
    <div className="Thought">
      <div className="Thoughtse">"{thought}"</div>
      <div className="Name">-{name}</div>
      <div className="DateTime">posted on {date}</div>
      {/* <div>{likee}</div> */}
      {/* <button onClick={likeThought}>LIKE</button> */}
    </div>
  );
};
