import React from "react";
import "./Header.css"
const Header = () => {
  const d = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div className="header">
      <h1>Todo-List</h1>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {days[d.getDay()]} 🌝 ☕ </h2>
      </div>
    </div>
  );
};

export default Header;
