import clsx from "clsx";
import React, { useState } from "react";
import Header from "../Header";
import SideBar from "../SideBar";
import cn from "./style.module.scss";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={clsx(cn.Layout)}>
      <SideBar isOpen={isOpen} />
      <div className={cn.Layout_wrap}>
        <Header setIsOpen={setIsOpen} isOpen={isOpen} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
