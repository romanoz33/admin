import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";
import cn from "./style.module.scss";
import { InputSearchProps } from "types/components/UI/InputSearch";

const InputSearch: FC<InputSearchProps> = ({ placeholder }) => {
  return (
    <div className={clsx(cn.InputSearch)}>
      <input
        type="text"
        id=""
        placeholder={placeholder}
        className={clsx(cn.InputSearch__input)}
      />
      <button className={clsx(cn.InputSearch__button)}>
        <Image
          src="/images/InputSearch/search.svg"
          alt="search"
          className={clsx(cn.InputSerach__icon)}
          height="20px"
          width="20px"
        />
      </button>
    </div>
  );
};

export default InputSearch;
