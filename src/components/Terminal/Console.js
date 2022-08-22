import React, { useState, useEffect } from "react";
import "./Console.css";
import Command from "./Command";
import Resume from "../../resume.pdf";
import { colorThemes } from "./color-themes";

const Console = () => {
  const [colorTheme, setColorTheme] = useState(colorThemes.nightOwl);

  let root = document.documentElement;
  root.style.setProperty("--background", colorTheme.backgroundColor);
  root.style.setProperty("--primary", colorTheme.primary);
  root.style.setProperty("--secondary", colorTheme.secondary);
  root.style.setProperty("--success", colorTheme.success);
  root.style.setProperty("--error", colorTheme.error);

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
      } else if (cmdLower.split(" ")[0] === "theme") {
        if (cmdLower.split(" ")[1] === "0") {
          setColorTheme(colorThemes.material);
          setHistory(
            history +
              `<span class="label">rpk.dev: ~$ </span>` +
              cmd +
              `</br><span>Theme: [0] Material Light</span></br></br>`
          );
        } else if (cmdLower.split(" ")[1] === "1") {
          setColorTheme(colorThemes.nightOwl);
          setHistory(
            history +
              `<span class="label">rpk.dev: ~$ </span>` +
              cmd +
              `</br><span>Theme: [1] Night Owl</span></br></br>`
          );
        } else if (cmdLower.split(" ")[1] === "2") {
          setColorTheme(colorThemes.ayu);
          setHistory(
            history +
              `<span class="label">rpk.dev: ~$ </span>` +
              cmd +
              `</br><span>Theme: [2] Ayu Dark</span></br></br>`
          );
        } else if (cmdLower.split(" ")[1] === "3") {
          setColorTheme(colorThemes.solarized);
          setHistory(
            history +
              `<span class="label">rpk.dev: ~$ </span>` +
              cmd +
              `</br><span>Theme: [3] Ubuntu Theme</span></br></br>`
          );
        } else {
          setHistory(
            history +
              `<span class="label">rpk.dev: ~$ </span>` +
              cmd +
              `</br><div class="error">${
                cmdLower.split(" ")[1]
              } is not a valid argument. Valid arguments include <span class="primary">[0,1,2,3]</span></div></br>`
          );
        }
      } else if (cmdLower === "exit") {
        window.location.href = "http://www.google.com";
      } else if (cmdLower === "catto") {
        changeCat(cat + 1);
        window.open(catURL, "_blank");
      } else if (cmdLower === "resume") {
        setHistory(
          history + `<span class="label">rpk.dev: ~$ </span>` + cmd + "</br>"
        );
        window.open(Resume);
      } else {
        setHistory(
          history +
            '<span class="label">rpk.dev: ~$ </span>' +
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
    <div className="console-container">
      <div className="margin">
        <h1>rhtshwprk.dev</h1>
        <div className="console">
          <div className="content">
            Welcome to the interactive console. Enter command:
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: history }}
          />
          {/* {history} */}
          <label className="label">rpk.dev: ~$ </label>
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="input"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Console;
