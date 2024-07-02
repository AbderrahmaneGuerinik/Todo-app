import Input from "./Input";
import Heading from "./Heading";
import Icon from "./Icon";
import { useTodos } from "./TodoContext";

function Header() {
  const { dark: isDark } = useTodos();
  return (
    <div
      className={`h-[35svh] ${
        isDark
          ? "bg-[url('../../public/images/bg-desktop-dark.jpg')]"
          : "bg-[url('../../public/images/bg-desktop-light.jpg')]"
      } bg-no-repeat
      bg-cover bg-center`}
    >
      <div className="flex items-center justify-center h-full gap-[2rem] flex-col">
        <div className="flex items-center justify-between w-[min(49rem,90%)]">
          <Heading />
          <Icon />
        </div>
        <Input />
      </div>
    </div>
  );
}

export default Header;
