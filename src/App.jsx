import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

const initialState = [
  {
    name: "Jog around the park 3x",
    status: "active",
    id: 1,
  },
  {
    name: "10 minutes meditation",
    status: "active",
    id: 2,
  },
  {
    name: "Read for 1 hour",
    status: "active",
    id: 3,
  },
  {
    name: "Pick up groceries",
    status: "active",
    id: 4,
  },
  {
    name: "Complete todo app",
    status: "active",
    id: 5,
  },
];
function App() {
  const [dark, setDark] = useState(true);
  const [todos, setTodos] = useState(initialState);
  const [type, setType] = useState("all");

  function handleChangeTheme() {
    setDark((dark) => !dark);
  }
  function handleAddTodo(name) {
    setTodos((todos) => [
      ...todos,
      { name, status: "active", id: todos[todos.length - 1].id + 1 },
    ]);
  }
  function handleDeleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }
  function handleChangeType(value) {
    setType(value);
  }
  function handleComplete(id) {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        else
          return {
            ...todo,
            status: todo.status === "completed" ? "active" : "completed",
          };
      })
    );
  }
  function handleClearCompleted() {
    setTodos((todos) => todos.filter((todo) => todo.status !== "completed"));
  }

  return (
    <>
      <Header
        isDark={dark}
        onChangeTheme={handleChangeTheme}
        onAddTodo={handleAddTodo}
      />
      <Main
        dark={dark}
        todos={todos}
        setTodos={setTodos}
        onDeleteTodo={handleDeleteTodo}
        type={type}
        onChangeType={handleChangeType}
        onComplete={handleComplete}
        onClearCompleted={handleClearCompleted}
      />
    </>
  );
}

export default App;
