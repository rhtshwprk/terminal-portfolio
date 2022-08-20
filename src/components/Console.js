import React, { useState, useEffect } from "react";
import styles from "./Input.module.css";
import Command from "./Command";
import "./table.css";
import Resume from "../resume.pdf";

const Console = () => {
  const [history, setHistory] = useState("");
  const [input, setInput] = useState("");
  const [cat, changeCat] = useState(0);
  const [catURL, changeCatURL] = useState("");
  //Fetch Cat image, when cat is changed

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => changeCatURL(data[0].url))
      .then((response) => console.log(response));
  }, [cat]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const cmd = event.target.value.trim();
      const cmdLower = cmd.toLowerCase();

      const output = Command(cmdLower);

      if (cmdLower === "clr") {
        setHistory("");
      } else if (cmdLower === "exit") {
        window.location.href = "http://www.google.com";
      } else if (cmdLower === "catto") {
        changeCat(cat + 1);
        window.open(catURL, "_blank");
      } else if (cmdLower === "resume") {
        setHistory(
          history +
            '<span style="color:purple;font-weight:600">rpk.dev: ~$ </span>' +
            cmd +
            "</br>"
        );
        window.open(Resume);
      } else {
        setHistory(
          history +
            '<span style="color:purple;font-weight:600">rpk.dev: ~$ </span>' +
            cmd +
            "</br>" +
            output
        );
      }
      setInput("");
      const lastEl = document.getElementById("lastElement");
      console.log(lastEl);
      setTimeout(() => {
        lastEl.scrollIntoView({
          // behavior: "smooth",
        });
      }, 0);
      // window.scrollTo(0, document.body.scrollHeight);
    }
  };

  return (
    <div>
      <h1>rhtshwprk.dev</h1>
      <div className={`${styles.console}`}>
        <div className={styles.content}>
          Welcome to the interactive console. Enter command:
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: history }}
        />
        {/* {history} */}
        <label className={styles.label}>rpk.dev: ~$ </label>
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className={styles.input}
        ></input>
      </div>
    </div>
  );
};

export default Console;
