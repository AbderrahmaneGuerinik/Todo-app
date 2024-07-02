import { useState } from "react";

function Input({ dark, onAddTodo }) {
  const [query, setQuery] = useState("");

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
    <div
      className="input-wrapper relative before:content-['']
        before:inline-block before:h-[23px] before:w-[23px] before:rounded-[50%] before:bg-transparent before:absolute before:left-[2rem]
        before:top-[50%] before:translate-y-[-50%] before:border-[1px] before:border-solid before:border-[#393A4B] w-[min(90%,50rem)]"
    >
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
