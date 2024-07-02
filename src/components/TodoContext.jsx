import { createContext, useContext, useState, useRef } from "react";

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

const todoContext = createContext();

function TodosProvider({ children }) {
  const [dark, setDark] = useState(true);
  const [todos, setTodos] = useState(initialState);
  const [type, setType] = useState("all");

  const idRef = useRef(0);

  function handleChangeTheme() {
    setDark((dark) => !dark);
  }
  function handleAddTodo(name) {
    setTodos((todos) => [
      ...todos,
      { name, status: "active", id: idRef.current },
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
    <todoContext.Provider
      value={{
        dark,
        setDark,
        todos,
        setTodos,
        type,
        setType,
        onChangeTheme: handleChangeTheme,
        onAddTodo: handleAddTodo,
        onDeleteTodo: handleDeleteTodo,
        onChangeType: handleChangeType,
        onComplete: handleComplete,
        onClearCompleted: handleClearCompleted,
      }}
    >
      {children}
    </todoContext.Provider>
  );
}

function useTodos() {
  const context = useContext(todoContext);
  return context;
}

export { TodosProvider, useTodos };
