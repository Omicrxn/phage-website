import React from "react";
import NavItem from "./NavItem.js";
import { FiGithub, FiInstagram, FiMenu, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
      <nav className="flex flex-wrap items-center px-10 lg:px-0 py-5  mb-3 justify-center">
        <div className="container flex flex-wrap">
          <div className=" lg:hidden order-2 flex-grow flex justify-end">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiMenu size={28} />
            </button>
          </div>
          <div
            className={
              "w-full flex lg:flex-1 lg:flex-grow justify-center lg:justify-start pt-5 lg:pt-0 lg:w-auto lg:flex order-2 lg:order-1" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row justify-start items-center list-none space-y-2 lg:space-y-0 lg:space-x-10">
              <NavItem text="Portfolio" href="/portfolio" onClick={() => setNavbarOpen(false)}/>
              <NavItem text="Services" href="/services"  onClick={() => setNavbarOpen(false)}/>
              <NavItem text="Contact" href="/contact"  onClick={() => setNavbarOpen(false)}/>
            </ul>
          </div>
          <div className="flex order-1 lg:order-2 lg:flex-1 lg:flex-grow justify-start lg:justify-center items-center cursor-pointer">
            <Link href="/" aria-current="page">
              <Image
                layout="intrinsic"
                src="/images/Lettering.png"
                width={181.616}
                height={30}
              />
            </Link>
          </div>
          <div className="w-full lg:flex-1 lg:flex-grow hidden lg:w-auto lg:flex lg:justify-end lg:order-3">
            <ul class="flex flex-grow flex-col lg:flex-row justify-end items-center list-none lg:space-x-10">
              <li class="nav-item ">
                <a
                  target="blank"
                  className="nav-link nav-text"
                  href="https://www.instagram.com/phage_hq/"
                >
                  <FiInstagram size={28} />
                </a>
              </li>
              <li class="nav-item">
                <a
                  target="blank"
                  className="nav-link nav-text"
                  href="https://twitter.com/PhageHQ"
                >
                  <FiTwitter size={28} />
                </a>
              </li>

              <li class="nav-item">
                <a
                  target="blank"
                  className="nav-link nav-text"
                  href="https://www.github.com/omicrxn/"
                >
                  <FiGithub size={28} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
