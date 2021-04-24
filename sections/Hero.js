import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-0 my-auto">
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

        <div className="col-lg-6">
          <Image
            className="hero-img"
            src="/images/wireframes.png"
            width={4398}
            height={2814}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
