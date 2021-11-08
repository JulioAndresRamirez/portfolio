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
      <main>
        <div className="container mx-auto px-4">
          <div className="grid place-items-center content-center min-h-screen gap-4">
            {/*<div  className="relative rounded-full w-36 h-36 shadow-lg border-2 border-gray-400">
              <img className="absolute w-full h-full object-cover rounded-full" src="https://avatars.githubusercontent.com/u/19557423?v=4" alt="Perfil"/>
            </div>
            <h5>Thinking...</h5>
            <h1 className="text-5xl font-bold">Hola! <span className="inline-block animate__headShake">👋🏻</span> soy Julio desarrollador web.</h1>
            <div className="w-8/12 ">
              <p className="text-gray-700 text-lg tracking-wide leading-relaxed text-center">Soy desarrollador <span className="font-bold">Front-End</span> con experiencia en React, Vue
                y el ecosistema de JS en general, además, con un especial interés en el diseño UI e investigación de UX. Me
                encanta crear productos digitales con una base solida en diseño y generar experiencias a través de estos. </p>
            </div>
            <SocialBar username="@juliorafre" twitter={true} instagram={true} github={true} linkedin={true}/>*/}
            <div className="relative rounded-full w-36 h-36 shadow-lg border-2 border-gray-400">
              <img className="absolute w-full h-full object-cover rounded-full" src="https://avatars.githubusercontent.com/u/19557423?v=4" alt="Perfil"/>
            </div>
            <SocialBar username="@juliorafre" twitter={true} instagram={true} github={true} linkedin={true}/>
          </div>
        </div>
      </main>
    </>

  );
}
