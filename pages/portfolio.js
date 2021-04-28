import Head from "next/head";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

export default function Portfolio() {
  return (
    <div className="h-full w-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Portfolio</h1>



      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-y-5 md:gap-10 h-full w-full">
        <div className="md:row-span-2 md:col-span-1  bg-gray-500">
        {<Card
            title="Influence"
            subtitle="Design and Development"
            path="/images/pc.png"
            width="300"
            height="600"
          />}
        </div>
        <div className="md:col-span-2 md:row-span-1    bg-gray-500">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/images/pc2.png"
            width="600"
            height="300"
          />
        </div>
        <div className="md:col-span-1 md:row-span-1  bg-gray-500">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/images/pc3.png"
            width="300"
            height="300"
          />
        </div>
        <div className="md:col-span-1 md:row-span-2   bg-gray-500">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/images/pc2.png"
            width="300"
            height="600"
          />
        </div>
        <div className="md:row-span-2 md:col-span-2   bg-gray-500">
        <Card
            title="Influence"
            subtitle="Design and Development"
            path="/images/pc.png"
            width="600"
            height="600"
          />
        </div>
        <div className="md:row-span-1 md:col-span-1    bg-gray-500">
        <Card
            title="Influence"
            subtitle="Design and Development"
            path="/images/pc.png"
            width="300"
            height="300"
          />
        </div>
      
      </div>
    </div>
  );
}
