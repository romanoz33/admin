import clsx from "clsx";
import cn from "./style.module.scss";
import React, { FC } from "react";
import InputSearch from "../../UI/InputSearch";
import { SideBarProps } from "types/Layouts/SideBar";
import SideBarHeader from "components/UI/SideBarHeader";

const SideBar: FC<SideBarProps> = ({ isOpen }) => {
  return (
    <section className={clsx(cn.SideBar, isOpen && cn.SideBarOpen)}>
      <SideBarHeader logo={isOpen ? "Chulakov Admin" : "CH"} />
      <form className={clsx(cn.SideBarSearch)} action="">
        <InputSearch placeholder={"Поиск по меню..."} />
      </form>
    </section>
  );
};

export default SideBar;
