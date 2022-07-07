const Command = (command) => {
  const help_data = [
    ["exit", "terminate session"],
    ["whoami", "get info about the creator"],
    ["resume", "download resume.pdf"],
    ["catto", "best command"],
    ["clr", "clear screen"],
    ["projects", "things i've helped make"],
    ["theme 0/1/2", "pick color theme"],
    ["gui", "visit normal portfolio"],
  ];
  const whoami = [
    ["name:", "rohitashwa pareek"],
    ["current position:", "3rd year CSE undergraduate at NIT Durgapur"],
    ["location:", "kolkata, india"],
    ["fav languages:", "[javascript, python, c++]"],
    ["hobbies:", "reading, e-sports"],
    ["last update:", "07-07-2022"],
  ];
  const projects = [
    [
      "ministore",
      "https://devpost.com/software/ministore-build-your-store-under-5-mins",
      "a mobile-first webapp to create an e-commerce store in 5 minutes. [undergoing huge update]",
    ],

    [
      "finschool",
      "https://devpost.com/software/finschool",
      "fintech app that turns learning personal finance a fun process.",
    ],
    [
      "terminal portfolio",
      "",
      "interactive console portfolio website. you're on it rn.",
    ],
    [
      "find plasma",
      "https://devpost.com/software/findplasmaonline-x-discord",
      "discord app and website to made to match blood plasma donors during covid-19 crisis.",
    ],
  ];
  const help_html = help_data.map(
    (command) =>
      `<div class='a'><div class='green'> ${command[0]} </div><div>${command[1]}</div></div>`
  );
  const whoami_html = whoami.map(
    (command) =>
      `<div class='a'><div class='green'> ${command[0]} </div><div>${command[1]}</div></div>`
  );

  const projects_html = projects.map(
    (command) =>
      `<a target='_blank' href="${command[1]}">${command[0]}</a><span>: ${command[2]}</span></br>`
  );

  if (command === "help") {
    return `<div class="top"><div style="color:green">available commands: </div>${help_html.join(
      ""
    )}</br>`;
  } else if (command === "whoami") {
    return `${whoami_html.join("")}</br>`;
  } else if (command === "projects") {
    return `${projects_html.join("")}</br>`;
  } else if (command === "") {
    return ``;
  } else if (command === "exit") {
    return `clearing the stack...`;
  }
  return '<div style= "color:red">Command not found. Type "help" to list available commands</div></br>';
};

export default Command;
