import Image from "next/image";

const Hero = () => {
  return (
    <div className="my-auto">
      <div className="row">
        <div className="col-lg-6">
          <div className="text-lg-start  text-center">
            <h1>Your dream</h1>
            <h1>our reality</h1>
            <p>
              With Phage design and technology become one to bring your dreams
              to life.
            </p>
          </div>
        </div>

        <div className="col-lg-6 p-0">
          <Image
            className="hero-img"
            src="/images/wireframes.png"
            width={4302}
            height={2748}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
