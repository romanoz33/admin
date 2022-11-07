import clsx from "clsx";
import cn from "./style.module.scss";
import React, { useState, useEffect, FC } from "react";
import { EVENT_TOGGLE_SIDEBAR } from "constants/events";
import InputSearch from "../../UI/InputSearch";
import { SideBarProps } from "types/Layouts/SideBar";
import SideBarHeader from "components/UI/SideBarHeader";

const SideBar: FC<SideBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    document.addEventListener(EVENT_TOGGLE_SIDEBAR, toggleSidebar);
    return () => {
      document.removeEventListener(EVENT_TOGGLE_SIDEBAR, toggleSidebar);
    };
  }, [isOpen]);

  return (
    <section className={clsx(cn.SideBar, isOpen && cn.SideBarClosed)}>
      <SideBarHeader logo={"Chulakov Admin"} />
      <form className={clsx(cn.SideBarSearch)} action="">
        <InputSearch placeholder={"Поиск по меню..."} />
      </form>
    </section>
  );
};

export default SideBar;
