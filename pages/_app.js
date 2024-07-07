import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Instagram Message Viewer</title>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer position="top-center" />
    </>
  );
}
