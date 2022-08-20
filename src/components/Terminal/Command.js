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
  ["languages:", "[javascript, python, c++]"],
  ["hobbies:", "reading, e-sports"],
  ["last update:", "21-08-2022"],
];
const projects = [
  [
    "ministore",
    "https://github.com/rhtshwprk/ministore",
    "a mobile-first webapp to create an e-commerce store in 5 minutes. [undergoing update]",
  ],

  [
    "finschool",
    "https://github.com/rhtshwprk/wheres-my-money",
    "fintech app that turns learning personal finance into a fun process.",
  ],
  [
    "terminal portfolio",
    "https://github.com/rhtshwprk/terminal-portfolio",
    "interactive console portfolio website. you're on it rn.",
  ],
  [
    "find plasma",
    "https://devpost.com/software/findplasmaonline-x-discord",
    "discord app and website made to match blood plasma donors during covid-19 crisis.",
  ],
];
const help_html = help_data.map(
  (data) =>
    `<div class='a'><div class='green table-header'> ${data[0]} </div><div>${data[1]}</div></div>`
);
const whoami_html = whoami.map(
  (data) =>
    `<div class='a'><div class='green table-header'> ${data[0]} </div><div>${data[1]}</div></div>`
);
const projects_html = projects.map(
  (data) =>
    `<a target='_blank' href="${data[1]}">${data[0]}</a><span>: ${data[2]}</span></br>`
);

const Command = (command) => {
  switch (command) {
    case "exit":
      return "terminating session";

    case "whoami":
      return `${whoami_html.join("")}</br>`;

    case "help":
      return `<div class="top"><div>available commands: </div>${help_html.join(
        ""
      )}</br>`;

    case "projects":
      return `${projects_html.join("")}</br>`;

    case "gui":
      return `<div>under construction...</div></br>`;

    case "":
      return "";

    default:
      return '<div class="error"  >Command not found. Type "help" to list available commands</div></br>';
  }
};

export default Command;
