import Head from 'next/head'
import QuickMessage from "../components/QuickMessage";
import SocialBar from "../components/SocialBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>juliorafre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid place-items-center min-h-screen bg-gray-200">
        <h1 className="text-6xl font-bold">
          <span className="text-gray-800">Thinking...</span>
        </h1>
      </div>
    </>

  );
}
