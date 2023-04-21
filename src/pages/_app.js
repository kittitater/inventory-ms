import "@/styles/globals.css";
import Layout from "@/components/Layout";
import SideNavbar from "@/components/SideNavbar";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Inventory MS</title>
        <link rel="icon" href="/warehouse.svg" />
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

