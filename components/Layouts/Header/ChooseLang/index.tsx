import clsx from 'clsx';
import Link from 'next/link';
import React, { FC } from 'react';
import { useRouter } from 'next/router';

import cn from './style.module.sass';

type TProps = {
    languages: Array<{ name: string; link?: string; active?: boolean }>;
    isMainPage: boolean;
    locale: string;
    asPath: string;
};

const LOCALE = {
    РУС: 'ru',
    ENG: 'en',
    汉语: 'cn',
    عربي: 'ar',
};

const ChooseLang: FC<TProps> = ({ languages, isMainPage, locale, asPath }) => {
    const router = useRouter();
    const isArabLocale = router.locale === 'ar';

    return (
        <ul className={clsx(cn.chooseLang, isMainPage && cn.chooseLangMain)}>
            {languages.map(({ name = '', link = '' }) => (
                <li
                    className={clsx(isArabLocale ? cn.chooseLangItemRTL : cn.chooseLangItem)}
                    key={name}
                >
                    <Link href="/pages" locale={LOCALE[name] as string}>
                        <a
                            className={clsx('custom-underline', cn.chooseLangLink, {
                                [cn.chooseLangLinkActive]: locale === LOCALE[name],
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
export default ChooseLang;
