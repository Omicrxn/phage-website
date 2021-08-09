import Image from "next/image";
import React from "react";
const Logos = () => {
  return (
    <div className="flex flex-col">
      <p className="pl-3 lg:p-0">Meet some of our clients:</p>
      <div className="grid grid-cols-5 mx-3 lg:mx-0">
        <div className="p-3 flex justify-center items-center">
          <Image
            layout="intrinsic"
            src="/images/lacreativitat.png"
            width={86.163}
            height={50}
          />
        </div>
        <div className="p-3 flex justify-center items-center">
          <Image
            layout="intrinsic"
            src="/images/VNG-Ajuntament.png"
            width={76.096}
            height={45}
          />
        </div>
        <div className="p-3 flex justify-center items-center">
          <Image
            layout="intrinsic"
            src="/images/lacreativitat-surtidor.png"
            width={50}
            height={50}
          />
        </div>
        <div className="p-3 flex justify-center items-center">
          <Image
            layout="intrinsic"
            src="/images/sushichef-icon-letra2.png"
            width={105.69}
            height={37}
          />
        </div>
        <div className="p-3 flex justify-center items-center">
          <Image
            layout="intrinsic"
            src="/images/JR.png"
            width={70.546}
            height={37}
          />
        </div>
      </div>
    </div>
  );
};

export default Logos;
