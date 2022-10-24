import Link from "next/link";
import React, { FC } from "react";
import { BreadcrumbsProps } from "../../../../types/components/UI/Breadcrumbs";
import cn from './style.module.scss'
import clsx from "clsx";

const Breadcrumbs: FC<BreadcrumbsProps> = ({ list }) => (
  <ul className={cn.list}>
    {list.map(li => (
      <li className={clsx(cn.listItem)}>
        <Link href={li.url}>
          <a className={cn.listLink}>{li.name}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default Breadcrumbs;
