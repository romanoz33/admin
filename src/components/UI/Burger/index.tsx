import clsx from "clsx";
import React, { useState } from "react";
import { EVENT_TOGGLE_SIDEBAR } from "../../../constants/events";
import cn from "./style.module.scss";

const Burger = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(true);

  const handleClick = () => {
    document.dispatchEvent(new CustomEvent(EVENT_TOGGLE_SIDEBAR));
    return setBurgerOpen(!isBurgerOpen);
  };

  return (
    <div
      className={clsx(cn.Burger, isBurgerOpen && cn.BurgerOpen)}
      onClick={handleClick}
    >
      <span className={clsx(cn.Line)}></span>
      <span className={clsx(cn.Line)}></span>
      <span className={clsx(cn.Line)}></span>
    </div>
  );
};

export default Burger;
