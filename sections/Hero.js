import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <div className="w-full items-center justify-center grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-y-10 ">
      <motion.div
        className=" text-center lg:text-left "
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
              delay: 0.5,
            },
          },
        }}
      >
        <h1>Your dream</h1>
        <h1>our reality</h1>
        <p className="pt-1">
          With Phage design and technology become one to bring your dreams to
          life.
        </p>
      </motion.div>
      <motion.div
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
              delay: 1,
            },
          },
        }}
      >
        <Image
          priority
          className="hero-img "
          src="/images/wireframes.png"
          width={4302}
          height={2748}
          layout="responsive"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
