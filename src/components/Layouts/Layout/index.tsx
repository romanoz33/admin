import clsx from "clsx";
import React from "react";
import DefaultLayout from "../DefaultLayout";
import SideBar from "../SideBar";
import cn from "./style.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={clsx(cn.Layout)}>
      <SideBar />
      <DefaultLayout>{children}</DefaultLayout>
    </div>
  );
};

export default Layout;
