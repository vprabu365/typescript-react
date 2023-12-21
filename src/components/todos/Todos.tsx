import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
interface Todo {
  id: string;
  title: string;
}
const Todos = () => {
  const [todos, setTodos] = useState("");
  const [addTodos, setAddTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [editId, setEditId] = useState<string | null>(null); // Track the ID of the item being edited
  const [updateMessage, setUpdateMessage] = useState("");
  const [showWarningMessage, setShowWarningMessage] = useState(true);
  const [initialTodoAdded, setInitialTodoAdded] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(addTodos));
  }, [addTodos]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos(e.target.value);
    if (e.target.value !== "") {
      setShowWarningMessage(true); // Hide message when input is not empty
    }
  };

  const handleAddTodos = () => {
    setAddTodos((currentAddTodos) => [
      ...currentAddTodos,
      {
        id: crypto.randomUUID(),
        title: todos,
      },
    ]);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todos === "" && todos.trim() === "") {
      setShowWarningMessage(true);
      return;
    }
    if (!initialTodoAdded) {
      handleAddTodos();
      setInitialTodoAdded(true);
    } else {
      handleAddTodos();
    }
    setTodos("");
    setUpdateMessage("");
    setShowWarningMessage(false);
  };

  const handleEdit = (id: string) => {
    setEditId(id);
  };

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const updatedTodos = addTodos.map((item) =>
      item.id === id ? { ...item, title: e.target.value } : item
    );
    setAddTodos(updatedTodos);
    setUpdateMessage("");
  };

  const handleEditSubmit = (id: string) => {
    setEditId(null);
    setUpdateMessage("Update successful!");
    return id;
  };

  const handleDelete = (id: string) => {
    const newTodos = addTodos.filter((todo) => todo.id !== id);
    setAddTodos(newTodos);
    if (newTodos.length === 0) {
      setShowWarningMessage(true);
    }
  };
  return (
    <div className="form--container">
      <h6>Get going!</h6>
      <TodoForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        todos={todos}
      />
      {todos.length === 0 && showWarningMessage && (
        <h6 className="empty--value">No todos found</h6>
      )}
      {addTodos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            editId={editId}
            handleEdit={handleEdit}
            handleEditChange={handleEditChange}
            handleEditSubmit={handleEditSubmit}
            handleDelete={handleDelete}
            updateMessage={updateMessage}
          />
        );
      })}
    </div>
  );
};

export default Todos;
