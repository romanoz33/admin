import React from 'react';

import cn from './style.module.sass';

const Copyright = ({ text }) => {
    const year = new Date().getFullYear();

    return (
        <div className={cn.copyright}>
            &copy; {year} {text}
        </div>
    );
};

export default Copyright;
