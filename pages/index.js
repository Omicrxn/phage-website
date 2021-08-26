import { motion } from "framer-motion";
import Head from "next/head";
import Hero from "../sections/Hero";
import Logos from "../sections/Logos";
export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center md:h-full py-2 ">
      <Head>
        <title>Phage | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex flex-grow justify-center items-center">
        <Hero />
      </div>
      <motion.div
        className=" w-full flex-grow-0 mb-20"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1.5,
            },
          },
        }}
      >
        <Logos />
      </motion.div>
    </div>
  );
}
