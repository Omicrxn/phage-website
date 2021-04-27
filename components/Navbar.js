import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import NavItem from "./NavItem";
export default function Navbar() {
  const router = useRouter();
  return (
    <div className="container py-5 ">
      <nav className="lg:block hidden">
      <div className="flex items-center">
          <ul className="flex flex-1 justify-start items-center">
            <NavItem text="Portfolio" href="/portfolio" />
            <NavItem text="Services" href="/services" />
            <NavItem text="About" href="/about" />
            <NavItem text="Contact" href="/contact" />
          </ul>
          <div className="flex flex-1 justify-center items-center">
          <Link  href="/" aria-current="page">
              <Image layout="intrinsic" src="/images/Lettering.png" width={181.616} height={30} />
          </Link>
          </div>

          <ul class="flex flex-1 justify-end items-center">
          <li class="nav-item px-2">
            <a target="blank" className="nav-link nav-text" href="https://twitter.com/PhageDev"><Image className="social-links" src={'/images/Twitter.png'} width={32} height={32}/></a>
            </li>
            <li class="nav-item px-2">
            <a target="blank" className="nav-link nav-text" href="https://www.instagram.com/phage.dev/"><Image className="social-links" src={'/images/Instagram.png'}width={32} height={32}/></a>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="lg:hidden flex justify-evenly mx-6">

          <Link
            className="flex-1 justify-start items-center cursor-pointer"
            href="/"
            aria-current="page"
          >
            <img className=" object-contain h-6" src="/images/Lettering.png" />
          </Link>
          <div className=" flex flex-1 justify-end items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          </div>
          

      </nav>
    </div>
  );
}
