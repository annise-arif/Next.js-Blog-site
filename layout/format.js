import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
