import "../style/global.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,height=device-height, initial-scale=1"
        />
        <link
          rel="preload"
          href="/fonts/orkney-bold-webfont.eot"
          as="font"
          type="font/eot"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/orkney-light-webfont.eot"
          as="font"
          type="font/eot"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/orkney-medium-webfont.eot"
          as="font"
          type="font/eot"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/orkney-regular-webfont.eot"
          as="font"
          type="font/eot"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
