import clsx from 'clsx';
import React, { FC } from 'react';

import cn from './style.module.sass';

type TProps = {
    text: string;
    indentLeft?: boolean;
};

const SectionTitle: FC<TProps> = ({ text, indentLeft }) => (
    <h2 className={clsx(cn.sectionTitle, indentLeft && cn.sectionTitleIndentLeft)}>{text}</h2>
);

export default SectionTitle;
