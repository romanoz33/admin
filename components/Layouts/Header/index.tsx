import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect, useRef, useState } from 'react';

import ChooseLang from '@/components/Layout/Header/ChooseLang';
import ChooseLangMobile from '@/components/Layout/Header/ChooseLangMobile';
import Logo from '@/components/Logo';
import MenuMain from '@/components/Menu/Main';
import MenuTop from '@/components/Menu/Top';
import ModalFull from '@/components/Modal/Full';
import InputSearch from '@/components/UI/InputSearch';
import PageContext from '@/context/PageContect';
import { IData } from '@/types/ISideServerProps';
import { LayoutProps } from '@/types/layout';

import cn from './style.module.sass';

const Header: FC<LayoutProps> = ({ isMainPage, isSearchPage }) => {
    const { menu } = useContext<IData>(PageContext);

    const { asPath, locale } = useRouter();
    const headerRef = useRef<HTMLDivElement>(null);
    const [invert, setInvert] = useState(false);

    const router = useRouter();
    const mainLocales = ['ru', 'en'];

    const handleScroll = () => {
        if (headerRef.current) {
            headerRef.current.classList.toggle(
                cn.headerSticky,
                window.pageYOffset > headerRef.current.offsetHeight
            );

            setInvert(window.pageYOffset > headerRef.current.offsetHeight);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [headerRef]);

    return (
        <header className={cn.wrapper} ref={headerRef}>
            <div className={clsx(cn.topPanel, isMainPage && cn.topPanelMain)}>
                <div className="container">
                    <div className={cn.topPanelContent}>
                        <ChooseLang
                            languages={menu.lang}
                            isMainPage={isMainPage}
                            locale={locale}
                            asPath={asPath}
                        />
                        {mainLocales.includes(router.locale) && <MenuTop isMainPage={isMainPage} />}
                    </div>
                </div>
            </div>
            <div
                className={clsx(cn.header, isMainPage && cn.headerMain)}
                style={{ direction: 'ltr' }}
            >
                <div className="container">
                    <div className={cn.headerContent}>
                        <Logo isMainPage={isMainPage} invert={invert} />
                        {!mainLocales.includes(router.locale) && (
                            <ChooseLangMobile
                                languages={menu.lang}
                                isMainPage={isMainPage}
                                locale={locale}
                                asPath={asPath}
                            />
                        )}
                        {mainLocales.includes(router.locale) && (
                            <div className={clsx(cn.headerWrapper, isSearchPage && cn.search)}>
                                {!isSearchPage ? (
                                    <>
                                        <MenuMain isMainPage={isMainPage} />
                                        <ChooseLangMobile
                                            languages={menu.lang}
                                            isMainPage={isMainPage}
                                            locale={locale}
                                            asPath={asPath}
                                        />
                                        <ModalFull isMainPage={isMainPage} />
                                    </>
                                ) : (
                                    <div className={cn.search}>
                                        <div className={cn.searchWrap}>
                                            <InputSearch />
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
