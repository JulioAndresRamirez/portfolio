import Head from 'next/head'

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen bg-gray-100">
      <Head>
        <title>juliorafre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-6xl font-bold">
        <span className="text-gray-700">Thinking...</span>
      </h1>
    </div>
  );
}
