import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import { Form } from "./components/form";
import { Thought } from "./components/thought";

function App() {
  const [items, setItems] = useState([]);

  const [thoughtlist, setThoughtlist] = useState([]);

  const [val, setVal] = useState(0);

  //for submitting items

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/read").then((respone) =>
  //     // console.log(respone);
  //     setThoughtlist(respone.data)
  //   );
  // }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((respone) =>
      // console.log(respone);
      setThoughtlist(respone.data)
    );
  }, [val]);

  const onFormSubmit = (item) => {
    setItems([...items, item]);
    console.log({ item });
    Axios.post("http://localhost:3001/insert", {
      username: item.name,
      thought: item.thought,
      date: item.datetime[0],
    }).then(() => setVal(val + 1));
  };

  return (
    <>
      <div className="App">
        <h1>Dabba network</h1>
        <Form formSubmit={onFormSubmit} />
        {thoughtlist.map((val, key) => (
          <Thought
            key={key}
            name={val.userName}
            thought={val.thoughtse}
            date={val.date}
          />
        ))}
      </div>
    </>
  );
}

export default App;
