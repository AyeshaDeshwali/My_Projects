import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleUpChange = (event) => {
    setText(event.target.value);
  };

  // Function to count words without counting extra spaces
  const countWords = () => {
    // Trim the text to remove any leading or trailing spaces
    let trimmedText = text.trim();

    // Check if the text is empty after trimming, return 0 if true
    if (trimmedText.length === 0) {
      return 0;
    }

    // Split the text by spaces and filter out any empty strings
    let words = trimmedText.split(/\s+/);
    return words.length;
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const handleText = (event) => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };

  return (
    <>
      <div
        className="container mt-5"
        style={{
          backgroundColor: props.mode === "dark" ? "gray" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }} // Apply styles here
      >
        <h1>{props.heading}</h1>
        <div className="mt-3">
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            value={text}
            onChange={handleUpChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#616362" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }} // Apply styles here
          ></textarea>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleClearText}>
          Clear Text
        </button>

        <button
          className="btn btn-primary mt-3 ms-3"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleText}>
          Copy Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {countWords()} words and {text.length} characters
        </p>
        <p>{0.008 * countWords()} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter  something to preview it here"}</p>
      </div>
    </>
  );
}

export default TextForm;
