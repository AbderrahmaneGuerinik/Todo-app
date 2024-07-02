import { useRef } from "react";
import Task from "./Task";

function Todos({ dark, todos, setTodos, onDeleteTodo, type, onComplete }) {
  const dragTask = useRef(0);
  const dragOverTask = useRef(0);

  function handleDragStart(index) {
    dragTask.current = index;
  }
  function handleDragEnter(index) {
    dragOverTask.current = index;
  }
  function handleSort() {
    const tasks = [...todos];
    const temp = tasks[dragTask.current];
    tasks[dragTask.current] = tasks[dragOverTask.current];
    tasks[dragOverTask.current] = temp;
    setTodos(tasks);
  }
  return (
    <ul className="w-[min(50rem,90%)] translate-y-[-40px] z-10 overflow-auto">
      {todos.map((todo, i) => {
        if (type === "all" || todo.status === type)
          return (
            <Task
              isFirst={i === 0}
              id={todo.id}
              dark={dark}
              name={todo.name}
              key={todo.id}
              onDeleteTodo={onDeleteTodo}
              onComplete={onComplete}
              todos={todos}
              onDragStart={() => handleDragStart(i)}
              onDragEnter={() => handleDragEnter(i)}
              onDragEnd={handleSort}
            />
          );
        else return null;
      })}
    </ul>
  );
}

export default Todos;
