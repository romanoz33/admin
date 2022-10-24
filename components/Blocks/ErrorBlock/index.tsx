import React from "react";

const ErrorBlock = ({ title, text }) => (
    <>
        <h2>
            Ошибка {title}
        </h2>
        <p>{text}</p>
    </>
);


export default ErrorBlock;
