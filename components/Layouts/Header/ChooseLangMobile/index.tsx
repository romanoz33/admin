import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react';

import cn from './style.module.sass';
import { langStore } from '@/domain/LangStore';

type TProps = {
    languages: Array<{ name: string; link: string; active?: boolean }>;
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

const ChooseLangMobile: FC<TProps> = ({ languages, isMainPage, locale, asPath }) => {
    const [showList, setShowList] = useState(false);

    const showListRef = useRef<HTMLUListElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const activeUrl = langStore.getHost();

    const handleScroll = () => {
        if (wrapperRef.current) {
            wrapperRef.current.classList.toggle(
                cn.headerSticky,
                window.pageYOffset > wrapperRef.current.offsetHeight
            );
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [wrapperRef]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            setShowList(wrapperRef.current && wrapperRef.current?.contains(event.target as Node));
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <div
            className={clsx(cn.chooseLangMobile, isMainPage && cn.chooseLangMobileMain)}
            ref={wrapperRef}
        >
            <button className={clsx(cn.chooseLangMobileBtn)} type="button">
                <Image src="/img/svg/icons/earth.svg" alt="" width={28} height={28} />
            </button>
            {showList && (
                <ul className={cn.chooseLangMobileList} ref={showListRef}>
                    {languages.map(({ name = '', link = '' }) => (
                        <li className={cn.chooseLangMobileListItem} key={name}>
                            <Link href="/pages" locale={LOCALE[name] as string}>
                                <a
                                    className={clsx(
                                        cn.chooseLangMobileLink,
                                        locale === LOCALE[name] && cn.chooseLangMobileLinkActive
                                    )}
                                    // href={link}
                                >
                                    {name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ChooseLangMobile;
