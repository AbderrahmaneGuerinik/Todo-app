import { useTodos } from "./TodoContext";

function Icon() {
  const { onChangeTheme, dark } = useTodos();
  return (
    <img
      src={`${dark ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}`}
      alt="icon-sun"
      className="h-[2.4rem] w-[2.4rem]"
      role="button"
      onClick={() => onChangeTheme()}
    />
  );
}

export default Icon;
