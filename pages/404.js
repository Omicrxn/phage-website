import Head from "next/head";
import Link from "next/link";
export default function Custom404() {
  return (
    <div className="container flex flex-col h-full items-center justify-center py-2 ">
      <Head>
        <title>Phage | 404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Oh a 404 page, here we go again...</h2>
      <Link href="/">
        <a className="my-5 px-10 py-3 text-phage-light bg-gradient-to-tr from-phage-blue to-phage-purple  focus:outline-none">
          Press this to teleport to a safe zone
        </a>
      </Link>
    </div>
  );
}
