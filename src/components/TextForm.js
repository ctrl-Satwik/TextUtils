import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const [palindromeResult, setPalindromeResult] = useState("");
  const [regexPattern, setRegexPattern] = useState("");
  const [regexResult, setRegexResult] = useState("");



  const handleUpClick = () => setText(text.toUpperCase());

  const handleLoClick = () => setText(text.toLowerCase());

  const handleClearClick = () => {
    setText("");
    setPalindromeResult("");
    setRegexResult("");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
    setPalindromeResult("");
    setRegexResult("");
  };



  const checkPalindrome = () => {
    const cleaned = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");

    setPalindromeResult(
      cleaned === reversed ? "It is a palindrome!" : "It is not a palindrome."
    );
  };

 
  const downloadCSV = () => {
    const csvContent = `"Text"\n"${text.replace(/"/g, '""')}"`;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text_output.csv";
    link.click();
  };



  const encryptText = () => {
    const encrypted = text
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) + 3))
      .join("");
    setText(encrypted);
  };

  const decryptText = () => {
    const decrypted = text
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) - 3))
      .join("");
    setText(decrypted);
  };



  const handleRegexTest = () => {
    try {
      const regex = new RegExp(regexPattern);
      setRegexResult(regex.test(text) ? "✔ Match Found" : "❌ No Match");
    } catch (err) {
      setRegexResult("Invalid Regex Pattern");
    }
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>

        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#212529" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          rows="8"
        ></textarea>

        {/* Buttons */}
        <button className="btn btn-primary mx-1 my-1" disabled={!text} onClick={handleUpClick}>
          Uppercase
        </button>

        <button className="btn btn-primary mx-1 my-1" disabled={!text} onClick={handleLoClick}>
          Lowercase
        </button>

        <button className="btn btn-primary mx-1 my-1" disabled={!text} onClick={checkPalindrome}>
          Check Palindrome
        </button>

        <button className="btn btn-warning mx-1 my-1" disabled={!text} onClick={downloadCSV}>
          Download CSV
        </button>

        <button className="btn btn-success mx-1 my-1" disabled={!text} onClick={encryptText}>
          Encrypt Text
        </button>

        <button className="btn btn-success mx-1 my-1" disabled={!text} onClick={decryptText}>
          Decrypt Text
        </button>

        <button className="btn btn-danger mx-1 my-1" disabled={!text} onClick={handleClearClick}>
          Clear Text
        </button>

        {/* REGEX Tester */}
        <div className="mt-3">
          <h4>Regex Tester</h4>
          <input
            type="text"
            placeholder="Enter Regex Pattern..."
            className="form-control"
            value={regexPattern}
            onChange={(e) => setRegexPattern(e.target.value)}
            style={{
            backgroundColor: props.mode === "dark" ? "#212529" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          />
          <button className="btn btn-secondary mt-2" onClick={handleRegexTest}>
            Test Regex
          </button>
          {regexResult && <p className="mt-2">{regexResult}</p>}
        </div>
      </div>

      {/* Text Summary */}
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((e) => e.length !== 0).length} Words and{" "}
          {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((e) => e.length !== 0).length}{" "}
          Minutes read
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>

        {palindromeResult && <p><strong>{palindromeResult}</strong></p>}
      </div>
    </>
  );
}
