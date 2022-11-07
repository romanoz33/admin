import clsx from "clsx";
import React, { FC } from "react";
import { SideBarHeaderProps } from "types/components/UI/SideBarHeader";
import cn from "./style.module.scss";

const SideBarLogo: FC<SideBarHeaderProps> = ({ logo }) => {
  return (
    <div className={clsx(cn.SideBarHeader)}>
      <h2 className={clsx(cn.SideBarHeader__logo)}>{logo}</h2>
    </div>
  );
};

export default SideBarLogo;
