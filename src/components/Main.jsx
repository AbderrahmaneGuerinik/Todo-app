import Stats from "./Stats";
import Todos from "./Todos";
import { useTodos } from "./TodoContext";

function Main() {
  const { dark } = useTodos();

  return (
    <main
      className={`flex flex-col items-center h-[calc(100svh-229.6px)] ${
        dark ? "bg-[#171823]" : "bg-[#FAFAFA]"
      }`}
    >
      <Todos />
      <Stats />
      <p className="font-josefin text-[#5B5E7E] font-normal text-center fixed bottom-[10px] z-[1]">
        Drag and drop to reorder list
      </p>
    </main>
  );
}

export default Main;
