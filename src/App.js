import "./styles.css";
import React from "react";

const skills = [
  {
    skillName: "HTMl - CSS",
    level: "intermediate",
    color: "blue",
  },
  {
    skillName: "JavaScript",
    level: "beginner",
    color: "Orange",
  },
  {
    skillName: "React",
    level: "beginner",
    color: "lightblue",
  },
  {
    skillName: "Github",
    level: "intermediate",
    color: "red",
  },
];

export default function App() {
  return (
    <div className="cardContainer">
      <Picture />
      <Biography />
      <SkillList />
    </div>
  );
}

function Picture() {
  return (
    <header>
      <div className="picture">
        <img src="profilePict.png" alt="profile_picture" />
      </div>
    </header>
  );
}

function Biography() {
  return (
    <div className="myBiography">
      <h2>Juan J Galvez</h2>
      <p>
        My name is Juan Galvez, and I am studying computer science. In addition,
        I have been learning web design. I like to work out, learn Italian, play
        videogames, and read.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skillName} />
      ))}

      {/* <Skill color="red" skillName="HTMl - CSS 👌" />
      <Skill color="orange" skillName="JS 👍" />
      <Skill color="lightblue" skillName="React 💪" /> */}
    </ul>
  );
}

function Skill({ skillObj }) {
  return (
    <li className="skill" style={{ background: skillObj.color }}>
      <span>
        {skillObj.skillName}
        {skillObj.level === "beginner" && "👶"}{" "}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advance" && "💪"}{" "}
      </span>
    </li>
  );
}
