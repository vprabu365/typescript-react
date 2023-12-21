// TodoItem.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Toaster from "../Toaster";

type TodoItemProps = {
  item: Todo;
  editId: string | null;
  handleEdit: (id: string) => void;
  handleEditChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleEditSubmit: (id: string) => void;
  handleDelete: (id: string) => void;
  updateMessage: string;
};

const TodoItem: React.FC<TodoItemProps> = ({
  item,
  editId,
  handleEdit,
  handleEditChange,
  handleEditSubmit,
  handleDelete,
  updateMessage,
}) => {
  return (
    <ul className="todos-section" key={item.id}>
      {editId === item.id ? (
        <form
          onSubmit={() => handleEditSubmit(item.id)}
          className="update-items"
        >
          <input
            onChange={(e) => handleEditChange(e, item.id)}
            value={item.title}
            className="update-input"
          />
          <button className="button-update">Update</button>
        </form>
      ) : (
        <>
          <p>{item.title}</p>
          <div className="icons">
            <FontAwesomeIcon
              className="edit-icon"
              icon={faPenToSquare}
              onClick={() => handleEdit(item.id)}
            />
            {updateMessage && <Toaster message={updateMessage} />}
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrash}
              onClick={() => handleDelete(item.id)}
            />
          </div>
        </>
      )}
    </ul>
  );
};

export default TodoItem;
