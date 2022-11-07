import clsx from 'clsx';
import React, { FC } from 'react';

import cn from './style.module.scss';

type TProps = {
    component: FC<unknown>;
    container?: boolean;
    noMargin?: boolean;
};

const Section: FC<TProps> = ({ component: Component, container, noMargin }) => (
    <section className={clsx(cn.section, noMargin && cn.sectionNoMargin)}>
        {container ? (
            <div className="container">
                <Component />
            </div>
        ) : (
            <Component />
        )}
    </section>
);

export default Section;
