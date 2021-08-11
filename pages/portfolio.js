import Head from "next/head";
import Card from "../components/Card";

export default function Portfolio() {
  return (
    <div className="container flex flex-col h-full py-2 ">
      <Head>
        <title>Phage | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className="my-7 mx-4 md:mx-0 text-5xl font-header font-normal text-phage-dark">
        Portfolio
      </h2>

      <div className="w-full my-6 grid grid-cols-1 gap-y-6 md:grid-cols-3 md:grid-rows-4 md:gap-6">
        <div className=" md:row-span-2 md:col-span-1 ">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/images/pc.png"
            width="300"
            height="600"
          />
        </div>
        <div className="bg-gray-500 md:row-span-1 md:col-span-2">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/images/pc2.png"
            width="600"
            height="300"
          />
        </div>
        <div className=" bg-gray-500 md:row-span-1 md:col-span-1">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/images/pc3.png"
            width="300"
            height="300"
          />
        </div>
        <div className="bg-gray-500 md:row-span-2 md:col-span-1">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/images/pc.png"
            width="300"
            height="600"
          />
        </div>
        <div className="bg-gray-500 md:row-span-2 md:col-span-2">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/images/pc4.png"
            width="600"
            height="600"
          />
        </div>
        <div className=" bg-gray-500 md:row-span-1 md:col-span-1">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/images/pc3.png"
            width="300"
            height="300"
          />
        </div>
      </div>
    </div>
  );
}
