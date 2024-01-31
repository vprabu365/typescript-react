import React, { useEffect, useState } from "react";
import Alert from "../Alert/Alert";
import "../Search/search.css";
import List from "./List";

const getLocalStorage = () => {
  const list = localStorage.getItem("ITEMS");
  const storedItems = localStorage.getItem("ITEMS");
  if (list) {
    return storedItems ? JSON.parse(storedItems) : null;
  } else {
    return [];
  }
};
const Search = () => {
  const [value, setValue] = useState("");
  const [isEditing, setisEditing] = useState(false);
  const [editID, setEditId] = useState(null);
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) {
      showAlert(true, "danger", "Please enter a value");
    } else if (value && isEditing) {
      showAlert(true, "success", "Item updated");
      setList(
        list.map((item: any) => {
          if (item.id === editID) {
            return { ...item, title: value };
          }
          return item;
        })
      );
      setisEditing(false);
      setValue("");
      setEditId(null);
    } else {
      const items = { id: crypto.randomUUID(), title: value };
      setList([...list, items]);
      showAlert(true, "success", "Item added to list");
      setValue("");
    }
  };

  const editItem = (id: any) => {
    const getItemToEdit = list.find((item: any) => item.id === id);
    setisEditing(true);
    setEditId(getItemToEdit?.id);
    setValue(getItemToEdit?.title);
  };

  const showAlert = (show = false, type = "", message = "") => {
    setAlert({ show, type, message });
  };

  const clearAllItems = () => {
    setList([]);
  };

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(list));
  }, [list]);
  return (
    <section className="search--container">
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      <h2>Items checklist</h2>
      <form className="form--section" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="eg. milk"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn btn-primary">
          {isEditing ? "Edit" : "Enter"}
        </button>
      </form>

      {list.length > 0 && (
        <div className="grocerylist--container">
          <List items={list} editItems={editItem} />
        </div>
      )}
      <button className="clear-all" onClick={clearAllItems}>
        Clear Items
      </button>
    </section>
  );
};

export default Search;
