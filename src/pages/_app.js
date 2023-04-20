import "@/styles/globals.css";
import Layout from "@/components/Layout";
import SideNavbar from "@/components/SideNavbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

