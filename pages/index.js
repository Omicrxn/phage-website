import { motion } from "framer-motion";
import Head from "next/head";
import Hero from "../sections/Hero";
import Logos from "../sections/Logos";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="px-2 w-full my-auto">
      <Head>
        <title>Phage | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center">
        <div className="w-full lg:my-32">
          <Hero />
        </div>
        <motion.div className="container" initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 3
    }
  },
}}>
          <Logos />
        </motion.div>
      </div>
    </div>
  );
}
