import clsx from "clsx";
import React from "react";
import cn from "./style.module.scss";

const Burger = ({ setIsOpen, isOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={clsx(cn.Burger, isOpen && cn.BurgerOpen)}
      onClick={handleClick}
    >
      <span className={clsx(cn.Line)}></span>
      <span className={clsx(cn.Line)}></span>
      <span className={clsx(cn.Line)}></span>
    </div>
  );
};

export default Burger;
