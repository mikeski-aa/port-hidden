import storebuddysmall from "../assets/project_cards/storebuddy0.webp";
import dmmesmall from "../assets/project_cards/dmmesmall.webp";
import knightsmall from "../assets/project_cards/knightmovesmall.webp";
import odinbooksmall from "../assets/project_cards/odinbooksmall.webp";
import todosmall from "../assets/project_cards/todosmall.webp";
import myocrappsmall from "../assets/project_cards/myocrappsmall.webp";
import portfoliosmall from "../assets/project_cards/portfoliosmall.webp";
import tictactoesmall from "../assets/project_cards/mptictactoesmall.webp";

import { IProjects } from "../interfaces";

const projects: IProjects[] = [
  {
    title: "OCR / Parser project",
    desc: `Air RB Parser is an application designed to analyze screenshots from the "Air Realistic Battle" mode in the MMO game "War Thunder" to determine the battle rating (BR) of the user's team's vehicles, thereby revealing whether they are in an "uptier" or "downtier" scenario.
Frontend is written in TypeScript with React. The app utilizes Tesseract.js for Optical Character Recognition (OCR). Data parsing and handling is done with Cheerio and Papa Parse for CSV operations.`,
    projectLink: "google.com",
    feRepo: "https://github.com",
    type: "Frontend",
    smallPic: myocrappsmall,
    isHosted: true,
    tech: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node" },
      { name: "CSS" },
      { name: "HTML" },
    ],
  },
  {
    title: "Multiplayer Tic Tac Toe",
    desc: "Multiplayer Tic Tac Toe is a multiplayer Tic Tac Toe game with leaderboards. Frontend is written in TypeScript with React, using Context API for state management. Backend is written in Node using Express.js, utilising websockets (Socket.io specifically) for websocket integration. User details are stored on PSQL server. For security, CORS set up on websockets and APIs to prevent XO attacks, and all user input is escaped to prevent SQL injection-based attacks.",
    projectLink: "google.com",
    feRepo: "https://github.com",
    beRepo: "https://github.com",
    type: "Fullstack",
    smallPic: tictactoesmall,
    isHosted: true,
    tech: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "CSS" },
      { name: "HTML" },
    ],
  },
  {
    title: "Store App",
    desc: "StoreBuddy is a simple store management webapp. Frontend is built using React in TypeScript, using ReactRouter for page routing and ContextAPI for state management. Backend written in Express.js. Authentication is handled by Passport.js middleware. Additionally, project uses Prisma ORM for PSQL database. Express backend utilises CRON for job scheduling - this is for database purging.",
    projectLink: "google.com",
    feRepo: "https://github.com",
    beRepo: "https://github.com",
    type: "Fullstack",
    smallPic: storebuddysmall,
    isHosted: true,
    tech: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "CSS" },
      { name: "HTML" },
      { name: "Photoshop" },
    ],
  },
  {
    title: "Social Media website",
    desc: "PlaceholderName is a PERN stack social media webapp based on Facebook's design. Secure user login implemented using JWT, users are able to create new accounts, create text or picture posts, create comments and likes, manage friends, customise their profile. The application is designed to be responsive and fully functional on mobile and desktop devices.",
    projectLink: "google.com",
    feRepo: "https://github.com",
    beRepo: "https://github.com",
    type: "Fullstack",
    smallPic: odinbooksmall,
    isHosted: true,
    tech: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "CSS" },
      { name: "HTML" },
      { name: "Photoshop" },
    ],
  },
  {
    title: "Portfolio",
    desc: "Portfolio page is React application, designed to emulate the look and feel of VSCode. Users are able to drag and re-arrange tabs, close them and reopen them, open a bonus page, interact with the terminal.",
    projectLink: "google.com",
    feRepo: "https://github.com",
    type: "Frontend",
    smallPic: portfoliosmall,
    isHosted: true,
    tech: [
      { name: "TypeScript" },
      { name: "React" },
      { name: "Node" },
      { name: "CSS" },
      { name: "HTML" },
      { name: "Photoshop" },
    ],
  },
  {
    title: "Dm.me",
    desc: "Dm.me is a PERN stack messaging webapp. Secure login using JWT, users can add friends, create direct messages, create group messages to 3 or more friends, manage their friends and customise user profile (online status, profile picture, display name). The application is designed to be responsive and fully functional on mobile and desktop devices.",
    projectLink: "google.com",
    feRepo: "https://github.com",
    beRepo: "https://github.com",
    type: "Fullstack",
    smallPic: dmmesmall,
    isHosted: true,
    tech: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "CSS" },
      { name: "HTML" },
      { name: "Photoshop" },
    ],
  },
  {
    title: "ToDo",
    desc: "ToDo is a React to-do webapp. Users are able to create and manage their individual to-do tasks, create specific to-do lists for tasks, move and re-assign tasks between lists and change their preferred data format (EU/US).",
    projectLink: "google.com",
    feRepo: "https://github.com",
    type: "Frontend",
    smallPic: todosmall,
    isHosted: true,
    tech: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node" },
      { name: "CSS" },
      { name: "HTML" },
    ],
  },
  {
    title: "Knight Travel",
    desc: "Knight travel is a React project where a user can select the starting and end location for the knight on the chessboard by either drag and drop or clicking the chessboard. The shortest path betwen two coordinates is displayed and possible paths are animated. Original project was a pure node application, rewritten to in React.",
    projectLink: "https://knight-move-react.netlify.app/",
    feRepo: "https://github.com",
    type: "Frontend",
    smallPic: knightsmall,
    isHosted: true,
    tech: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node" },
      { name: "CSS" },
      { name: "HTML" },
    ],
  },
];

export default projects;
