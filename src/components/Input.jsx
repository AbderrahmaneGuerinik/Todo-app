import { useState } from "react";
import { useTodos } from "./TodoContext";

function Input() {
  const [query, setQuery] = useState("");
  const { dark, onAddTodo } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    onAddTodo(query);
    setQuery("");
  }
  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="input-wrapper relative w-[min(90%,50rem)]">
      <button
        className="inline-block h-[23px] w-[23px]  rounded-[50%]  bg-transparent  absolute  left-[2rem]
         top-[50%]  translate-y-[-50%]  border-[1px]  border-solid  border-[#393A4B]"
        onClick={(e) => handleSubmit(e)}
      />

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={query}
          className={`${
            dark
              ? "bg-[#25273D] text-[#C8CBE7] placeholder:text-[#767992]"
              : "bg-[#FAFAFA] text-[#393A4B] placeholder:text-[#9495A5]"
          }  
            font-josefin  py-[1.3rem] text-[1.5rem] placeholder:text-[1.5rem]
            w-full rounded-[5px] font-normal placeholder:font-normal  focus:outline-none pl-[6rem]`}
          onChange={(e) => handleChangeQuery(e)}
        />
      </form>
    </div>
  );
}

export default Input;
