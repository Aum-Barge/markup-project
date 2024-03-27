import { useState } from "react";
import "./App.css";
/* import Markdown from "react-markdown" */;
import Markdown from 'markdown-to-jsx'
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Editor from "./Pages/Editor";




function App() {
  const [value, setValue] = useState("");

  const updateValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="">
      <Navbar />
      <Home />
      <Editor />
      {/* editor */}
      {/* <h1 className="heading">Enter a markdown text:</h1>
      <textarea
        name=""
        id=""
        cols="50"
        value={value}
        onChange={updateValue}
        rows="8"
        className="border rounded-lg border-gray-400"
      ></textarea>
      <div>
          <Markdown>{value}</Markdown>
      </div> */}
    </div>
  );
}

export default App;
