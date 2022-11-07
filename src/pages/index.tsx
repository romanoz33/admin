import { GetServerSideProps } from "next";
import React, { FC } from "react";
import Head from "next/head";
import Section from "../components/Layouts/Section";
import { IPage } from "../types/PageProps";
import PageContext from "../context/PageContext";
import TitleBlock from "../components/Blocks/TitleBlock";
import Layout from "../components/Layouts/Layout";

export interface IPropsPage {
  pageData: IPage;
  error: boolean;
}

const IndexPage: FC<IPropsPage> = ({ error, pageData }) => {
  return (
    <>
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="description" />
      </Head>
      <PageContext.Provider value={pageData}>
        <Layout>
          <Section
            component={() => <TitleBlock title={"Главная"} />}
            noMargin
          />
        </Layout>
      </PageContext.Provider>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  console.log(locale);

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
