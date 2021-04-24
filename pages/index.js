import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Hero from "../sections/Hero";
import Logos from "../sections/Logos";
export default function Home() {
  return (
    <>
      <Head>
        <title>Phage | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container d-flex flex-column justify-content-lg-end  h-100" style={{margin:"8vh 0  8vh 0"}}>
        <Hero />
        <Logos />
      </div>

      {/* <div className="container d-flex flex-column justify-content-center h-100" >
        <Hero />
        <Logos />
      </div> */}

    </>
  );
}
