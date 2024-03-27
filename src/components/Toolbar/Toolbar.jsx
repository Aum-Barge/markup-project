import React, { useState } from 'react';

const Toolbar = () => {
    const [text, setText] = useState('Write your Markdown text here...');
    const boldSelection = () => {
        const textarea = document.getElementById("markdownEditor");
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const selectedText = textarea.value.substring(start, end);
        if(selectedText.length != 0){
        const newText = textarea.value.substring(0, start) + "**" + selectedText + "**" + textarea.value.substring(end);}
        else{
            alert("Select the text")
        }

        setText(newText);
    }

    return (
        <div>
            <textarea id="markdownEditor" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={boldSelection}>Bold Selection</button>
        </div>
    );
};

export default Toolbar;
