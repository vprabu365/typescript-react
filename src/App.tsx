import * as React from "react";
import NavBar from "./components/others/NavBar";
import Todo from "./components/todos/Todos";
function App() {
  const items = ["Home", "About", "Contact Us"];

  return (
    <>
      <NavBar items={items} style="Gold" />
      <Todo />
    </>
  );
}

export default App;
