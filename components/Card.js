import React from "react";
import Image from "next/image";
const Card = (props) => {
  return (
    <div className="relative overflow-hidden w-full h-full">

        {/* <img
          src={props.path}
          alt=""
          className=" object-fill"/> */}

        <Image src={props.path} objectFit="cover" layout="fill"/>
      <div className="absolute top-0 bg-transparent">
        <h2 className="bg-transparent">{props.title}</h2>
        <h3 className="bg-transparent">{props.subtitle}</h3>
      </div>
    </div>
  );
};

export default Card;
