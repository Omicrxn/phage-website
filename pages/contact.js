import Head from "next/head";
import Image from "next/image";
import Input from "../components/Input";
import styles from "../styles/Home.module.css";

import {
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiMapPin,
  FiSmartphone,
  FiMail,
} from "react-icons/fi";

export default function Contact() {
  return (
    <div className="container flex flex-col  h-full">
      <h2 className="mx-4 md:mx-0 mt-7 md:my-7 text-5xl font-header font-normal text-phage-dark">
        We are here for you
      </h2>
      <div className="flex items-center h-full">
        <div className="flex flex-1">
          {/* Contact form */}

            <form action="" className="flex-1 space-y-10 ">
              <Input label="Full Name" />
              <Input label="Email" />
              <Input label="Message" />
              <button
                className="w-full h-14 text-phage-light bg-gradient-to-tr from-phage-blue to-phage-purple  focus:outline-none"
                type="submit"
              >
                Send
              </button>
            </form>

          {/* Icons */}
          <div className="flex flex-1 justify-center">
          <div className="flex flex-col justify-between">
            <div className="flex  items-center">
              <FiMapPin className="mr-2" size={32} />
              <p>
                Vilanova i la geltrú <br /> Barcelona,Spain.
              </p>
            </div>
            <div className="flex items-center">
              <FiSmartphone className="mr-2" size={32} />
              <p>+34 639 13 44 48</p>
            </div>
            <div className="flex items-center">
              <FiMail className="mr-2" size={32} />
              <p>phagedevelopment@gmail.com</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
