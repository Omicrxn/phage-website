import Input from "../components/Input";
import TextArea from "../components/TextArea";
import { useState } from "react";
import {
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiMapPin,
  FiSmartphone,
  FiMail,
} from "react-icons/fi";

export default function Contact() {
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
        setBody("");
      }
    });
  };
  return (
    <div className="container flex flex-col h-full">
      <h2 className="mx-5 md:mx-0 mt-7 mb-7 md:my-7 text-5xl font-header font-normal text-phage-dark">
        We are here for you
      </h2>
      <div className="flex items-center h-full flex-wrap mx-5 md:mx-0">
        <div className="flex flex-1 flex-wrap">
          {/* Contact form */}
          <div className="flex-grow">
            <form action="flex-grow" className="space-y-10 ">
              <Input
                label="Full Name"
                name="name"
                label="Full Name"
                onChange={setName}
                value={name}
              />
              <Input
                label="Email"
                name="email"
                label="Email"
                onChange={setEmail}
                value={email}
              />
              <TextArea
                label="Message"
                name="message"
                label="Message"
                rows="10"
                cols="30"
                onChange={setMessage}
                value={message}
              />
              <button
                className="w-full h-14 text-phage-light bg-gradient-to-tr from-phage-blue to-phage-purple  focus:outline-none"
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Send
              </button>
            </form>
          </div>
          {/* Icons */}
          <div className="flex flex-grow justify-center mt-10 lg:mt-0">
            <div className="flex flex-col justify-between space-y-10">
              <div className="flex  items-center ">
                <FiMapPin className="mr-2 " size={32} />
                <p>
                  Vilanova i la geltrú <br /> Barcelona,Spain.
                </p>
              </div>
              <div className="flex items-center ">
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
