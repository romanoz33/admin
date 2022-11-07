import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import DefaultLayout from "../components/Layouts/DefaultLayout";
import {IPage} from "../types/PageProps";
import PageContext from '../context/PageContext';
import ErrorBlock from "../components/Blocks/ErrorBlock";


export interface IPropsPage {
    pageData: IPage;
    error: boolean;
}

const NotFoundPage: FC<IPropsPage> = ({ error, pageData }) => (
    <div style={{ overflow: 'hidden' }}>
        <Head>
            <title>Admin Panel</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageContext.Provider value={pageData}>
            <DefaultLayout error={error}>
                <ErrorBlock title="Запрос" text="Описание ошибки" />
            </DefaultLayout>
        </PageContext.Provider>
    </div>
);

export const getStaticProps: GetStaticProps = async context => {
    const { locale } = context;

    const pageData = {
        staticContent: {
            ...(await import(`../locales/ru/index.json`)).default,
        } as { [key: string]: { [key: string]: string } },
    };
    try {
        // const [] = await Promise.all([
        //
        // ]);
    } catch (e) {
        console.log((e as Error).message);
        return {
            props: {
                pageData: null,
                error: true,
            },
            revalidate: 60,
        };
    }
    return { props: { pageData, error: false } };
};
export default NotFoundPage;
