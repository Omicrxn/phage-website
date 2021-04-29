import React from "react";

import Link from "next/link";
import { BsArrowRight} from 'react-icons/bs'

const Service = (props) => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-5/12 mr-auto px-4 pt-24 md:pt-0">
        <h3 class="text-4xl font-header text-phage-primary font-normal">{props.title}</h3>
        <p class="pt-5 text-lg leading-normal">
          {props.text}
        </p>
        <Link href="/contact"><a href="" className="pt-5 flex items-center text-xl font-bold">Get in contact <BsArrowRight className="ml-3" size={32}/></a></Link>
      </div>
      
      <div className="w-full md:w-4/12 ml-auto px-12 md:px-0">
      <img alt="..." class="max-w-full rounded-lg shadow-xl" src={props.src}/>

      </div>
    </div>
  );
};

export default Service;
