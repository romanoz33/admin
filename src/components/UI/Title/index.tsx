import React, { FC } from "react";
import { TitleProps } from "../../../types/components/UI/Title";
import cn from "./style.module.scss";

const Title: FC<TitleProps> = ({ title }) => (
  <h1 className={cn.title}>{title}</h1>
);

export default Title;
