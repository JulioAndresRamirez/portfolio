import Head from 'next/head'

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen bg-blue-100">
      <Head>
        <title>juliorafre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-6xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">In construction ...</span>
      </h1>
    </div>
  );
}
