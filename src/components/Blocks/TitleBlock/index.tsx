import React from "react";
import Breadcrumbs from "../../UI/Breadcrumbs";
import Title from "../../UI/Title";
import cn from "./style.module.scss";

const arr = [
  {
    id: 1,
    name: "Главная",
    url: "/",
  },
  {
    id: 2,
    name: "Рекламный сайт",
    url: "/adversting",
  },
];

const TitleBlock = ({ title }) => {
  return (
    <div className={cn.titleBlock}>
      <Title title={title} />
      <Breadcrumbs list={arr} />
    </div>
  );
};

export default TitleBlock;
