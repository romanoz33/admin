import clsx from 'clsx';
import React, { useContext } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from './style.module.sass';
import { IData } from '@/types/ISideServerProps';
import PageContext from '@/context/PageContect';

type TProps = {
    languages: Array<{ name: string; link: string; active?: boolean }>;
};

const LOCALE = {
    РУС: 'ru',
    ENG: 'en',
    汉语: 'cn',
    عربي: 'ar',
};

const ChooseLangModal = () => {
    const { menu } = useContext<IData>(PageContext);

    const { asPath, locale } = useRouter();
    return (
        <ul className={cn.chooseLangModal}>
            {menu?.lang.map(({ name, link }) => (
                <li className={cn.chooseLangModalItem} key={name}>
                    <Link href={`${asPath}`} locale={LOCALE[name] as string}>
                        <a
                            className={clsx('custom-underline', cn.chooseLangLink, {
                                [cn.chooseLangModalLinkActive]: locale === LOCALE[name],
                            })}
                        >
                            {name}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ChooseLangModal;
