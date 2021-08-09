import React from "react";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Service = (props) => {
  return (
    <>
    <div>
      <svg width="0" height="0" visibility="hidden">
                <linearGradient
                  id="blue-gradient"
                  x1="100%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                >
                  <stop stopColor="#629fea" offset="0%" />
                  <stop stopColor="#8662ea" offset="100%" />
                </linearGradient>
              </svg>
      </div>
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-5/12 mr-auto px-4 pt-24 md:pt-0 mb-16 md:mb-0">
        <h3 class="text-4xl font-header text-phage-dark font-normal">{props.title}</h3>
        <p class="pt-5 text-lg leading-normal">
          {props.text}
        </p>
        <Link href="/contact"><a href="" className="pt-5 flex items-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-phage-blue to-phage-purple">Get in contact <BsArrowRight className="ml-3" fill="url(#blue-gradient)"  size={32}/></a></Link>
      </div>
      
      <div className="w-full md:w-4/12 ml-auto px-12 md:px-0 ">
      <img alt="..." class="max-w-full rounded-lg shadow-xl" src={props.src}/>

      </div>
    </div>
    </>
  );
};

export default Service;
