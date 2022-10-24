import clsx from 'clsx';
import Error from 'next/error';
import React, { FC } from 'react';
import { useRouter } from 'next/router';


import cn from './style.module.scss';
import {DefaultLayoutProps} from "../../../types/Layouts/LayoutProps";

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, error }) => {
    return (
        <>
            {/*{error && <Error statusCode={500} />}*/}
            {!error && (
                <div
                    className={clsx(cn.layout)}
                >
                    {/*<Header />*/}
                    <div className={clsx(cn.layoutContent)}>
                        {children}
                    </div>
                    {/*<Footer />*/}
                </div>
            )}
        </>
    );
};

export default DefaultLayout;
