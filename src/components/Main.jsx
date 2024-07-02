import { closestCorners, DndContext } from "@dnd-kit/core";
import Stats from "./Stats";
import Todos from "./Todos";

function Main({
  dark,
  todos,
  setTodos,
  onDeleteTodo,
  type,
  onChangeType,
  onComplete,
  onClearCompleted,
}) {
  return (
    <main
      className={`flex flex-col items-center h-[calc(100svh-229.6px)] ${
        dark ? "bg-[#25273D]" : "bg-[#FAFAFA]"
      }`}
    >
      <DndContext collisionDetection={closestCorners}>
        <Todos
          dark={dark}
          todos={todos}
          setTodos={setTodos}
          onDeleteTodo={onDeleteTodo}
          type={type}
          onComplete={onComplete}
        />
      </DndContext>
      <Stats
        dark={dark}
        todos={todos}
        onChangeType={onChangeType}
        type={type}
        onClearCompleted={onClearCompleted}
      />
      <p className="font-josefin text-[#5B5E7E] font-normal text-center fixed bottom-[10px] z-[1]">
        Drag and drop to reorder list
      </p>
    </main>
  );
}

export default Main;
