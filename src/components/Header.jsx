import Input from "./Input";
import Heading from "./Heading";
import Icon from "./Icon";

function Header({ isDark, onChangeTheme, onAddTodo }) {
  return (
    <div
      className={`h-[35svh] ${
        isDark
          ? "bg-[url('../../images/bg-desktop-dark.jpg')]"
          : "bg-[url('../../images/bg-desktop-light.jpg')]"
      } bg-no-repeat
      bg-cover bg-center`}
    >
      <div className="flex items-center justify-center h-full gap-[2rem] flex-col">
        <div className="flex items-center justify-between w-[min(49rem,90%)]">
          <Heading />
          <Icon onChangeTheme={onChangeTheme} dark={isDark} />
        </div>
        <Input dark={isDark} onAddTodo={onAddTodo} />
      </div>
    </div>
  );
}

export default Header;
