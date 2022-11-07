import clsx from "clsx";
import Burger from "../../UI/Burger";
import cn from "./style.module.scss";

const Header = ({ setIsOpen, isOpen }) => {
  return (
    <header className={clsx(cn.Header)}>
      <Burger setIsOpen={setIsOpen} isOpen={isOpen} />
    </header>
  );
};

export default Header;
