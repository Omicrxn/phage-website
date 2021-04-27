import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
