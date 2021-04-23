import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Phage | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container d-flex flex-column justify-content-center my-auto">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="text-md-start  text-center">
              <h1>Your dream</h1>
              <h1>our reality</h1>
              <p>
                With Phage design and technology become one to bring your dreams
                to life.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-12">
            <Image
              className="hero-img"
              src="/images/wireframes.png"
              width={4398}
              height={2814}
              layout="intrinsic"
            />
          </div>
        </div>

        <div className="row row-cols-5">
          <div className="d-flex justify-content-center align-items-end">
            <Image className="photo-business" src="/images/lacreativitat.png" width={74.1} height={43}/>
          </div>
          <div className="d-flex justify-content-center align-items-end">
            <Image className="photo-business" src="/images/VNG-Ajuntament.png" width={76.096} height={45}/>
          </div>
          <div className="d-flex justify-content-center align-items-end">
            <Image className="photo-business" src="/images/lacreativitat-surtidor.png" width={48} height={48}/>
          </div>
          <div className="d-flex justify-content-center align-items-end">
            <Image className="photo-business" src="/images/sushichef-icon-letra2.png" width={ 105.69} height={37}/>
          </div>
          <div className="d-flex justify-content-center align-items-end">
            <Image className="photo-business" src="/images/JR.png" width={70.546} height={37}/>
          </div>
        </div>
      </div>
    </>
  );
}
