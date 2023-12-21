import React from "react";

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  todos: string;
};
const TodoForm = ({ handleSubmit, handleChange, todos }: Props) => {
  return (
    <form className="form--section" onSubmit={handleSubmit}>
      <input
        placeholder="Enter task"
        className="input--section"
        onChange={handleChange}
        value={todos}
      />
      <button className="button-type">Add task</button>
    </form>
  );
};

export default TodoForm;
