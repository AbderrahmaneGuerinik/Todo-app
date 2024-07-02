import { useState } from "react";
import { useTodos } from "./TodoContext";

function Stats() {
  const { dark, todos, onChangeType, type, onClearCompleted } = useTodos();
  const [selected, setSelected] = useState(0);

  return (
    <div
      className={`bg-[#25273D] w-[min(50rem,90%)] px-[2rem] flex items-center justify-between py-[1.4rem] rounded-b-[5px]
    translate-y-[-40px] ${dark ? "bg-[#25273D]" : "bg-[#FAFAFA]"} z-10`}
    >
      <span className="font-josefin text-[1.2rem] font-normal text-[#5B5E7E]">
        {type === "all" && todos.length}
        {type === "active" &&
          todos.filter((todo) => todo.status === "active").length}
        {type === "completed" &&
          todos.filter((todo) => todo.status === "completed").length}{" "}
        items left
      </span>
      <ul>
        <li
          role="button"
          className={`font-josefin text-[1.2rem] ${
            selected === 0
              ? "font-bold text-[#3A7CFD]"
              : "font-normal text-[#9495A5]"
          } inline ${selected !== 0 && dark ? "hover:text-white" : ""}
           ${selected !== 0 && !dark ? "hover:text-[#494C6B]" : ""}`}
          onClick={() => {
            setSelected(0);
            onChangeType("all");
          }}
        >
          All
        </li>
        <li
          role="button"
          className={`font-josefin text-[1.2rem] ${
            selected === 1
              ? "font-bold text-[#3A7CFD]"
              : "font-normal text-[#5B5E7E]"
          } inline ml-[10px] ${selected !== 1 && dark ? "hover:text-white" : ""}
            ${
              selected !== 1 && !dark
                ? "text-[#9495A5] hover:text-[#494C6B]"
                : ""
            }`}
          onClick={() => {
            setSelected(1);
            onChangeType("active");
          }}
        >
          Active
        </li>
        <li
          role="button"
          className={`font-josefin text-[1.2rem] ${
            selected === 2
              ? "font-bold text-[#3A7CFD]"
              : "font-normal text-[#5B5E7E]"
          } inline ml-[10px]  ${
            selected !== 2 && dark ? "hover:text-white" : ""
          }
           ${
             selected !== 2 && !dark
               ? " text-[#9495A5] hover:text-[#494C6B]"
               : ""
           }
           `}
          onClick={() => {
            setSelected(2);
            onChangeType("completed");
          }}
        >
          Completed
        </li>
      </ul>
      <button
        className={`font-josefin text-[1.2rem] font-normal border-none ${
          dark ? "hover:text-white text-[#5B5E7E]" : "hover:text-[#494C6B]"
        } ${!dark ? "text-[#9495A5] hover:text-[#494C6B]" : ""}`}
        onClick={onClearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default Stats;
