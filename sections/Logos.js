import Image from "next/image";

const Logos = () => {
  return (
    <div className="">
      <div className="row row-cols-4">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            layout="intrinsic"
            src="/images/lacreativitat.png"
            width={86.163}
            height={50}
          />
        </div>
        {/* <div className="d-flex justify-content-center align-items-end">
            <Image layout="intrinsic" src="/images/VNG-Ajuntament.png" width={76.096} height={45}/>
          </div> */}
        <div className="d-flex justify-content-center align-items-center">
          <Image
            layout="intrinsic"
            src="/images/lacreativitat-surtidor.png"
            width={50}
            height={50}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Image
            layout="intrinsic"
            src="/images/sushichef-icon-letra2.png"
            width={105.69}
            height={37}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
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
