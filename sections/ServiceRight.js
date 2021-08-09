import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight} from 'react-icons/bs'

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
       <div className="w-full md:w-4/12  px-12 md:px-0 order-1   md:mr-auto">
      <img alt="..." class="max-w-full rounded-lg shadow-xl" src={props.src} />
        {/* <Image
          src={props.src}
          width={props.width}
          height={props.height}
          layout="intrinsic"
        /> */}
      </div>
      <div className="w-full md:w-5/12 md:ml-auto px-4 pt-16 md:pt-0 md:order-1 mb-16 md:mb-0">
        <h3 class="text-4xl font-header text-phage-dark font-normal">{props.title}</h3>
        <p className="pt-5 text-lg leading-normal ">
          {props.text}
        </p>
        <Link href="/contact"><a href="" className="pt-5 flex items-center text-xl font-bold leading-normal text-transparent bg-clip-text bg-gradient-to-tr from-phage-blue to-phage-purple">Get in contact <BsArrowRight fill="url(#blue-gradient)" className="ml-3" size={32}/></a></Link>

      </div>
      
     
    </div>
    </>
  );
};

export default Service;
