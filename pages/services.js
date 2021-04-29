import Head from "next/head";
import ServiceLeft from "../sections/ServiceLeft";
import ServiceRight from "../sections/ServiceRight";
import styles from "../styles/Home.module.css";

export default function Services() {
  return (
    <div className="w-full">
      <Head>
        <title>Phage | Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="my-7 text-5xl font-header font-normal text-phage-primary">
        Services
      </h2>
      <div className="mt-20">
        <ServiceRight
          title="Design"
          text="A bad design may lead to an unsuccessful business. Good design will help you stand out from your competition and leave an impression on the customers."
          src="/images/ServiceImg.png"
          width="540"
          height="540"
        />
      </div>
      <div className="mt-20">
        <ServiceLeft
          title="Mobile APP’s"
          text="The use of phones has increased over the past few years. With our custom-made mobile app development, make your brand or product accessible to customers."
          src="/images/ServiceImg.png"
          width="540"
          height="540"
        />
      </div>
      <div className="mt-20">
        <ServiceRight
          title="Websites"
          text="Build your business online and grow your audience. From Wordpress sites to custom coded websites, we are able to accommodate your needs."
          src="/images/ServiceImg.png"
          width="540"
          height="540"
        />
        </div>
    </div>
  );
}
