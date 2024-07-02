import { useState } from "react";
import { useTodos } from "./TodoContext";

function Task({
  isFirst = false,
  id,
  name,
  onDragStart,
  onDragEnter,
  onDragEnd,
}) {
  const { dark, todos, onDeleteTodo, onComplete } = useTodos();
  const isChecked =
    todos.filter((todo) => todo.id === id && todo.status === "completed")
      .length > 0;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`input-wrapper relative flex items-center ${
        dark ? "bg-[#25273D]" : "bg-[#FAFAFA]"
      }  py-[1.5rem] pl-[6rem] cursor-pointer
       ${isFirst ? "rounded-t-[5px]" : ""} 
       ${
         dark ? "border-[#393A4B] text-[#494C6B]" : "border-[#E3E4F1]"
       } border-b-[2px] border-solid`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        onComplete(id);
      }}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      draggable
    >
      <label
        className={`font-josefin text-[1.5rem] ${
          isChecked ? "line-through" : ""
        } ${dark ? "text-[#C8CBE7]" : "text-[#494C6B]"} cursor-pointer
        ${isChecked ? (dark ? "text-[#5f6480]" : "text-[#D1D2DA]") : ""}`}
        htmlFor="check"
      >
        {name}
        <input
          type="checkbox"
          checked={isChecked}
          className={`h-[23px] w-[23px] rounded-[50%] bg-transparent absolute left-[2rem] top-[50%] translate-y-[-50%]
         ${
           !isChecked ? "border-[1px]" : ""
         }  border-[rgb(57,58,75)] appearance-none cursor-pointer before:content-[''] before:translate-x-[5px] before:scale-0 before:inline-block before:h-[1rem] before:w-[1rem] before:delay-[120ms] before:ease-in-out
          checked:before:scale-[1] checked:bg-gradient-to-t from-[#c058f3] to-[#55ddff] before:shadow-[inset_1em_1em_white] before:animation-check before:ease before:duration-[70ms]
           ${
             !isChecked ? "hover:border-[2px]" : ""
           }  hover:border-t-[#55ddff] hover:border-b-[#c058f3] hover:border-r-[#b762e1d3] hover:border-l-[#60c7e1b5] hover:border-solid`}
          id={id}
        />
        <img
          src="../../images/X.png"
          alt="delete-icon"
          role="button"
          className={`absolute right-[2rem] top-[50%] translate-y-[-50%] h-[1.3rem] w-[1.3rem] ${
            !isHovered ? "hidden" : ""
          }`}
          onClick={() => onDeleteTodo(id)}
        />
      </label>
    </li>
  );
}

export default Task;
