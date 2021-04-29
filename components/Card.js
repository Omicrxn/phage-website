import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="relative w-full h-full \">
      <img
          src={props.path}
          alt={props.title}
          width={props.width}
          height={props.height}
          className="object-cover w-full h-full"/>

      {/* <Image
        src={props.path}
        width={props.width}
        height={props.height}
        layout="responsive"
        objectFit="cover"
        quality={100}
      /> */}

      <div className=" p-8 absolute top-0 bg-transparent">
        <h2 className=" text-2xl text-phage-dark bg-transparent">{props.title}</h2>
        <h3 className=" text-lg text-phage-dark bg-transparent">{props.subtitle}</h3>
      </div>
    </div>
  );
};

export default Card;
