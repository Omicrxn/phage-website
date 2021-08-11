import Head from "next/head";
import ServiceLeft from "../sections/ServiceLeft"
import ServiceRight from "../sections/ServiceRight"
export default function Services() {
  return (
    <div className="container flex flex-col h-full py-2 ">
      <Head>
        <title>Phage | Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className=" mx-4 md:mx-0 mt-7 md:my-7 text-5xl font-header font-normal text-phage-dark">
        Services
      </h2>
      <div>
      <div className="md:mt-20">
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
    </div>
  );
}
