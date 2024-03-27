import React, { useState } from "react";
import Layout from "../../Layout";
import Markdown from "markdown-to-jsx";
import "./TextEditor.css";

const TextEditor = () => {
  const [text, setText] = useState("");
  const [selectedHeading, setSelectedHeading] = useState("");

  const updateValue = (e) => {
    setText(e.target.value);
  };

  const formatSelection = (format, prefix, suffix) => {
    const textarea = document.getElementById("markdownEditor");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selectedText = textarea.value.substring(start, end);

    let newText;

    // Check if the selected text is already formatted
    if (
      textarea.value.substring(start - prefix.length, start) === prefix &&
      textarea.value.substring(end, end + suffix.length) === suffix
    ) {
      // Remove formatting
      newText =
        textarea.value.substring(0, start - prefix.length) +
        selectedText +
        textarea.value.substring(end + suffix.length);
    } else {
      // Add formatting
      newText =
        textarea.value.substring(0, start) +
        prefix +
        selectedText +
        suffix +
        textarea.value.substring(end);
    }

    // Set the updated textarea value
    setText(newText);

    // Calculate the new selection positions
    const newStart = start + prefix.length;
    const newEnd = newStart + selectedText.length;

    // Set the selection to the original selected text
    textarea.setSelectionRange(newStart, newEnd);
    setSelectedHeading(""); // Deselect heading after formatting
  };

  const insertLink = () => {
    const url = prompt("Enter the URL:");
    const selectedText = document.getElementById("markdownEditor").value.substring(
      document.getElementById("markdownEditor").selectionStart,
      document.getElementById("markdownEditor").selectionEnd
    );

    if (url) {
      const linkMarkdown = selectedText ? `[${selectedText}](${url})` : `[${url}](${url})`;
      formatSelection("link", linkMarkdown, "");
    }
  };

  const insertImage = () => {
    const imageUrl = prompt("Enter the image URL:");
    const altText = prompt("Enter the alt text (optional):");

    if (imageUrl) {
      const imageMarkdown = altText
        ? `![${altText}](${imageUrl})`
        : `![](${imageUrl})`;
      formatSelection("image", imageMarkdown, "");
    }
  };

  return (
    <Layout>
      <div>
        <h1 className="aliger">Enter the text below</h1>
        <div className="toolbar">
          <ul>
          <li>
            <select
              value={selectedHeading}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedHeading(value);
                if (value === "h1") {
                  formatSelection("heading", "#", "");
                } else if (value === "h2") {
                  formatSelection("heading", "##", "");
                } else if (value === "h3") {
                  formatSelection("heading", "###", "");
                } else if (value === "h4") {
                  formatSelection("heading", "####", "");
                } else if (value === "h5") {
                  formatSelection("heading", "#####", "");
                } else if (value === "h6") {
                  formatSelection("heading", "######", "");
                }
              }}
            >
              <option value="">No Heading</option>
              <option value="h1">H1</option>
              <option value="h2">H2</option>
              <option value="h3">H3</option>
              <option value="h4">H4</option>
              <option value="h5">H5</option>
              <option value="h6">H6</option>
            </select>
          </li>
          <li><button className="bold" onClick={() => formatSelection("bold", "**", "**")}>B</button></li>
          <li><button className="italics" onClick={() => formatSelection("italic", "*", "*")}>I</button></li>
          <li><button className="code" onClick={() => formatSelection("code", "`", "`")}>Code</button></li>
          <li><button className="picture" onClick={insertLink}>Link</button></li>
          <li><button className="link" onClick={insertImage}>Image</button></li>
          </ul>
          </div>
          <textarea id="markdownEditor" value={text} onChange={updateValue} />
      </div>
      <div>
        <h1 className="aliger">Rendered text</h1>
        <div className="Markdown"><Markdown>{text}</Markdown></div>
      </div>
    </Layout>
  );
};

export default TextEditor;

/* 
import React, { useState } from "react";
import Layout from "../../Layout";
import Markdown from "markdown-to-jsx";
import "./TextEditor.css";

const TextEditor = () => {
  const [text, setText] = useState("");
  const [selectedHeading, setSelectedHeading] = useState(""); // State to track the selected heading

  const updateValue = (e) => {
    setText(e.target.value);
  };

  const formatSelection = (format, prefix, suffix) => {
    const textarea = document.getElementById("markdownEditor");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start === end) {
      alert("Select some text.");
      return;
    }

    const selectedText = textarea.value.substring(start, end);

    let newText;

    // Check if the selected text is already formatted
    if (
      textarea.value.substring(start - prefix.length, start) === prefix &&
      textarea.value.substring(end, end + suffix.length) === suffix
    ) {
      // Remove formatting
      newText =
        textarea.value.substring(0, start - prefix.length) +
        selectedText +
        textarea.value.substring(end + suffix.length);
    } else {
      // Add formatting
      newText =
        textarea.value.substring(0, start) +
        prefix +
        selectedText +
        suffix +
        textarea.value.substring(end);
    }

    // Set the updated textarea value
    setText(newText);

    // Calculate the new selection positions
    const newStart = start + prefix.length;
    const newEnd = newStart + selectedText.length;

    // Set the selection to the original selected text
    textarea.setSelectionRange(newStart, newEnd);
    setSelectedHeading(""); // Deselect heading after formatting
  };

  return (
    <Layout>
      <div>
        <h1>Enter the text below</h1>
        <select
          value={selectedHeading}
          onChange={(e) => {
            const value = e.target.value;
            setSelectedHeading(value);
            if (value === "h1") {
              formatSelection("heading", "#", "");
            } else if (value === "h2") {
              formatSelection("heading", "##", "");
            } else if (value === "h3") {
              formatSelection("heading", "###", "");
            } else if (value === "h4") {
              formatSelection("heading", "####", "");
            } else if (value === "h5") {
              formatSelection("heading", "#####", "");
            } else if (value === "h6") {
              formatSelection("heading", "######", "");
            }
          }}
        >
          <option value="">No Heading</option>
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
          <option value="h4">H4</option>
          <option value="h5">H5</option>
          <option value="h6">H6</option>
        </select>
        <button onClick={() => formatSelection("bold", "**", "**")}>B</button>
        <button onClick={() => formatSelection("italic", "*", "*")}>I</button>
        <button onClick={() => formatSelection("code", "`", "`")}>Code</button>
        <textarea id="markdownEditor" value={text} onChange={updateValue} />
      </div>
      <div>
        <h1>Rendered text</h1>
        <Markdown>{text}</Markdown>
      </div>
    </Layout>
  );
};

export default TextEditor;
 */