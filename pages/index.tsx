import type { NextPage } from 'next'
import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import Head from 'next/head';
import DefaultLayout from "../components/Layouts/DefaultLayout";
import Section from "../components/Layouts/Section";
import {IPage} from "../types/PageProps";
import PageContext from '../context/PageContext';
import TitleBlock from '../components/Blocks/TitleBlock';

export interface IPropsPage {
  pageData: IPage;
  error: boolean;
}


const IndexPage: FC<IPropsPage> = ({ error, pageData }) => {

  return (
      <>
        <Head>
          <title>Title</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="description" />
        </Head>
        <PageContext.Provider value={pageData}>
          <DefaultLayout error={error}>
            <Section
                component={() => (
                    <TitleBlock title={'Главная'} />
                )}
                noMargin
            />

          </DefaultLayout>
        </PageContext.Provider>
      </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { locale } = context;
  console.log(locale)

  const pageData = {
    staticContent: {
      ...(await import(`../locales/ru/index.json`)).default,
    } as { [key: string]: { [key: string]: string } },
  };

  try {
    // const [menu] = await Promise.all([
    //
    // ]);
    // pageData.menu = menu;

  } catch (e) {
    console.log((e as Error).message);
    return {
      props: {
        pageData: null,
        error: true,
      },
    };
  }
  return { props: { pageData, error: false } };
};

export default IndexPage;




