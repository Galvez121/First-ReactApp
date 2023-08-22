import "./styles.css";
import React from "react";

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
    <div className="skill-list">
      <Skill color="red" skillName="HTMl - CSS 👌" />
      <Skill color="orange" skillName="JS 👍" />
      <Skill color="lightblue" skillName="React 💪" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      <span>{props.skillName}</span>
    </div>
  );
}
