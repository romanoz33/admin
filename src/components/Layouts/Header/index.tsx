import clsx from "clsx";
import Burger from "../../UI/Burger";
import cn from "./style.module.scss";

const Header = () => {
  return (
    <header className={clsx(cn.Header)}>
      <Burger />
    </header>
  );
};

export default Header;
