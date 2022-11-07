import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';

import ContactsInfoBottom from '@/components/ContactsInfo/Bottom';
import Copyright from '@/components/Layout/Footer/Copyright';
import PrivacyPolicy from '@/components/Layout/Footer/PrivacyPolicy';
import MenuBottom from '@/components/Menu/Bottom';
import SocialLinks from '@/components/SocialLinks';
import PageContext from '@/context/PageContect';
import Breakpoints from '@/helpers/breakpoints';
import useResize from '@/hooks/useResize';
import { IData } from '@/types/ISideServerProps';

import TelegramSVG from '../../../../public/img/svg/icons/social/telegram.svg';
import VkSVG from '../../../../public/img/svg/icons/social/vk.svg';
import cn from './style.module.sass';
import useLanguage from '@/hooks/useLanguage';

const socialNetworks = [
    {
        name: 'Вконтаке',
        icon: () => <VkSVG />,
        link: 'https://vk.com/gapresurs',
    },
    {
        name: 'Telegram',
        icon: () => <TelegramSVG />,
        link: 'https://t.me/gap_resurs',
    },
];

const Footer = () => {
    const { staticContent } = useContext<IData>(PageContext);
    const isMainLanguages = useLanguage('ru', 'en');

    const [showTable, setShowTable] = useState(false);
    const width = useResize();

    const condition = width > Breakpoints.mobile && width < Breakpoints.tablet;

    useEffect(() => {
        setShowTable(condition);
    }, [width]);

    return (
        <footer className={cn.footer}>
            <div className="container">
                {isMainLanguages && (
                    <div className={cn.footerTop}>
                        <MenuBottom />
                        <ContactsInfoBottom socialNetworks={socialNetworks} />
                    </div>
                )}
                <div className={cn.footerBottom}>
                    <div className={clsx(cn.footerColumn, cn.footerColumnLeft)}>
                        <Copyright text={staticContent.footer.copyright} />
                        <PrivacyPolicy text={staticContent.footer.privacyPolicy} />
                    </div>
                    {showTable && isMainLanguages && (
                        <div className={clsx(cn.footerColumn, cn.footerColumnRight)}>
                            <div className={cn.footerParagraph}>{staticContent.footer.social}</div>
                            <SocialLinks socialNetworks={socialNetworks} color="white" />
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
