import clsx from 'clsx';
import React from 'react';

import cn from './style.module.sass';

const PrivacyPolicy = ({ text }) => (
    <a
        className={clsx(cn.privacyPolicy)}
        href="/download/exportCatalogs/en-ru/privacy_policy.pdf"
        target="_blank"
        rel="noopener noreferrer"
    >
        {text}
    </a>
);

export default PrivacyPolicy;
