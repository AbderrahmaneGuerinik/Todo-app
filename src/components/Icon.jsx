import { useTodos } from "./TodoContext";

function Icon() {
  const { onChangeTheme, dark } = useTodos();
  return (
    <img
      src={`${
        dark
          ? "../../public/images/icon-sun.svg"
          : "../../public/images/icon-moon.svg"
      }`}
      alt="icon-sun"
      className="h-[2.4rem] w-[2.4rem]"
      role="button"
      onClick={() => onChangeTheme()}
    />
  );
}

export default Icon;
