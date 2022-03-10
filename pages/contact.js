import {useState} from "react";
import Head from "next/head";
import Script from "next/script";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import {
    FiMapPin,
    FiSmartphone,
    FiMail,
  } from "react-icons/fi";
export default function Custom404() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };
  return (
    <div className="container flex flex-col h-full py-2 ">
      <Head>
        <title>Phage | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className="mx-5 md:mx-0 mt-7 mb-7 md:my-7 text-5xl font-header font-normal text-phage-dark">
        We are here for you
      </h2>
      <div className="h-full mx-5 md:mx-0">
        <div className="text-center text-lg">
        <p >Want us to develop your software? You can schedule a first call with us.</p>
        </div>
      <div data-url="https://calendly.com/omicrxn?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=222a33&text_color=f9fafa&primary_color=3c85de" className="calendly-inline-widget w-full h-screen overflow-hidden"></div>
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
      </div>
    </div>
  );
}

