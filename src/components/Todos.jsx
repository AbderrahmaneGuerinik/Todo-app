import { useRef } from "react";
import Task from "./Task";
import { useTodos } from "./TodoContext";

function Todos() {
  const { todos, setTodos, type } = useTodos();
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
              name={todo.name}
              key={todo.id}
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
