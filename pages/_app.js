import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
      <footer>
        Site created via following course | Credits: Maximilian Schwarzmüller
      </footer>
    </Fragment>
  );
}

export default MyApp;
