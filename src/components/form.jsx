import { useState } from "react";
import "./form.css";

export const Form = ({ formSubmit }) => {
  const [name, setName] = useState("");
  const [thought, setThought] = useState("");
  const datetime = useState(
    (
      new Date().toLocaleTimeString() +
      " " +
      new Date().toLocaleDateString()
    ).toString()
  );
  const like = 0;

  //submitting form up to App.js
  const submitForm = (event) => {
    event.preventDefault();
    if (name && thought) {
      formSubmit({ name, thought, datetime, like });
      setName("");
      setThought("");
    } else {
      alert("Enter something numpty");
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            className="nameField"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Thought</label>
          <input
            type="text"
            value={thought}
            className="thoughtField"
            placeholder="Enter your thoughts"
            onChange={(e) => setThought(e.target.value)}
          ></input>
        </div>
        <div>
          <button onSubmit={submitForm} className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
