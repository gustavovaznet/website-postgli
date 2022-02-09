//INDEX PAGE

//IMPORTING
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

//HOME
const Home = () => {
  return (
    <div className="relative flex flex-col items-center bg-white App">
      <Head>
        <title>Postgli | Marketing, Publicidade e Propaganda</title>
      </Head>
      {/* HEADER */}
      <div className="relative z-0 w-full h-screen text-white bg-cover bg-home-header">
        {/* OVERLAY */}
        <div className="absolute z-0 w-full h-screen bg-black opacity-50"></div>
        {/* CONTAINER */}
        <div className="absolute z-0 flex flex-col items-center justify-end w-full h-screen pb-6 opacity-100">
          {/* DOWNWARDS */}
          <div className="mt-auto text-blue animate-bounce">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {/* HERO */}
        <div className="z-20 flex flex-col items-center justify-center flex-1 h-screen pt-12">
          <h1 className="z-20 w-4/5 leading-tight text-center text-white motion-safe:animate-fadeSlideUp">
            Vamos juntos <em className="em">transformar</em> o seu negócio com
            muita <em className="em">inovação</em>.
          </h1>
          <div className="flex mt-8 motion-safe:animate-fadeSlideUp">
            <Link href="/contact">
              <a className="mr-4 btn-blue">Quero Inovar</a>
            </Link>

            <Link href="/who-we-are">
              <a className="btn-gray-outline">Saiba Mais</a>
            </Link>
          </div>
        </div>
      </div>
      {/* WHAT WE DO */}
      <div className="relative w-full bg-white js-show-on-scroll">
        <div className="container py-20 mx-auto text-center">
          <h2 className="mb-8">Nossos Serviços</h2>
          <p className="text-lg font-bold">
            Marketing, Publicidade e Propaganda
          </p>
          <p className="mb-12 text-lg">
            Reconstruimos o seu negócio através das melhores prática e
            estratégias de marketing do mercado, procurando sempre o crescimento
            e expansão sem nunca esquecer da inovação.
          </p>
          <div className="flex flex-col items-start md:flex-row">
            <div className="flex flex-col w-full mb-8 mr-4 text-center md:w-1/3 md:mb-0">
              {/* ICON */}
              <div className="w-1/5 mx-auto mb-4 transition duration-500 ease-in-out transform md:w-1/3 hover:scale-110">
                <Image src="/service-01.svg" width={270} height={250} />
              </div>
              {/* CONTENT */}
              <div>
                <div className="flex items-center justify-center h-auto mb-4 md:h-16 lg:h-auto md:mb-0 lg:mb-4">
                  <h4 className="mb-0">Tecnologia</h4>
                </div>
                <p className="leading-2">
                  Nossos time de tecnologia construíra as melhores aplicações
                  para divulgar sua marca na web e assim aumentar o seu número
                  de clientes.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full mb-8 mr-4 text-center md:w-1/3 md:mb-0">
              {/* ICON */}
              <div className="w-1/5 mx-auto mb-4 transition duration-500 ease-in-out transform md:w-1/3 hover:scale-110">
                <Image src="/service-02.svg" width={270} height={250} />
              </div>
              {/* CONTENT */}
              <div>
                <div className="flex items-center justify-center h-auto mb-4 md:h-16 lg:h-auto md:mb-0 lg:mb-4">
                  <h4 className="mb-0">Redes Sociais</h4>
                </div>
                <p className="leading-2">
                  Usamos as principais redes sociais que estão bombando no
                  momento para fazer a sua marca chegar a todos os clientes
                  potenciais.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full mb-8 mr-4 text-center md:w-1/3 md:mb-0">
              {/* ICON */}
              <div className="w-1/5 mx-auto mb-4 transition duration-500 ease-in-out transform md:w-1/3 hover:scale-110">
                <Image src="/service-03.svg" width={270} height={250} />
              </div>
              {/* CONTENT */}
              <div>
                <div className="flex items-center justify-center h-auto mb-4 md:h-16 lg:h-auto md:mb-0 lg:mb-4">
                  <h4 className="mb-0">Anúncios</h4>
                </div>
                <p className="leading-2">
                  Usamos os principais meios de anúncios existentes na web como
                  google, youtube, facebook e outros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WORK */}
      <div className="relative w-full bg-blue">
        <div className="container py-20 mx-auto text-center">
          <h2 className="mb-8">Nossos Clientes</h2>
          <p className="mb-12 text-lg font-normal">
            Possuímos grandes empresas como nossos clientes, trabalhamos com
            clientes de nichos e mercados variados, desde moda e beleza até
            tecnologia da informação, nosso trabalho não possui barreiras.
          </p>
          <div className="flex flex-row flex-wrap items-center">
            <div className="w-1/2 sm:w-1/3 lg:w-1/6">
              <Image src="/client-logo-1.png" width={376} height={160} />
            </div>

            <div className="w-1/2 sm:w-1/3 lg:w-1/6">
              <Image src="/client-logo-2.png" width={376} height={160} />
            </div>

            <div className="w-1/2 sm:w-1/3 lg:w-1/6">
              <Image src="/client-logo-3.png" width={376} height={160} />
            </div>

            <div className="w-1/2 sm:w-1/3 lg:w-1/6">
              <Image src="/client-logo-4.png" width={376} height={160} />
            </div>

            <div className="w-1/2 sm:w-1/3 lg:w-1/6">
              <Image src="/client-logo-5.png" width={376} height={160} />
            </div>

            <div className="w-1/2 sm:w-1/3 lg:w-1/6">
              <Image src="/client-logo-6.png" width={376} height={160} />
            </div>
          </div>
        </div>
      </div>
      {/* WORK */}
      <div className="relative w-full bg-gray-900">
        <div className="container py-20 mx-auto text-center">
          <h2 className="mb-8 text-white">Ficou interessado?</h2>
          <p className="mb-8 text-lg text-white">
            Que tal conversar com um de nossos especialistas, faremos um
            levantamento da sua empresa e da sua atual situação no mercado, com
            base em todas as informações geramos um orçamento detalhado e sem
            compromisso. Vamos lá é de graça! :)
          </p>
          <button className="mr-4 btn-blue">Consultar Especialista</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
