import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState("");

  const handleChange = (e) => {
    setTodos(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form--container">
      <h3>What do you want to do?</h3>
      <form className="form--section" onSubmit={handleSubmit}>
        <input
          placeholder="Enter task"
          className="input--section"
          onChange={handleChange}
        />
        <button className="button-type">Add task</button>
      </form>
      <span style={{ color: "white" }}>{todos}</span>
    </div>
  );
};

export default Todos;
