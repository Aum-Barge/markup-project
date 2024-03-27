import { useState } from "react";
import "./App.css";
/* import Markdown from "react-markdown" */;
import Markdown from 'markdown-to-jsx'
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Editor from "./Pages/Editor";




function App() {

  return (
    <div >
      <Navbar />
      <Home />
      <Editor />
    </div>
  );
}

export default App;
