//CLIENTS PAGE

//IMPORTING
import Head from 'next/head';
import Image from 'next/image';

//OURCLIENTS
const OurClients = () => {
  return (
    <>
      <Head>
        <title>Postgli | Marketing, Publicidade e Propaganda</title>
      </Head>
      {/* HEADER */}
      <div className="relative z-0 w-full pt-24 text-white bg-cover bg-home-header">
        {/* HERO WRAPPER */}
        <div className="z-20 flex flex-col items-start justify-center py-12">
          <div className="container z-20 mx-auto motion-safe:animate-fadeSlideUp">
            <h6 className="z-20 font-normal tracking-wider text-left text-gray-500 uppercase">
              Clientes
            </h6>
            <h1 className="z-20 w-4/5 mb-0 leading-tight text-left text-white">
              Empresas que confiam em nós
            </h1>
          </div>
        </div>
      </div>
      {/* OUR CLIENTS */}
      <div className="relative w-full bg-gray-white">
        <div className="container py-16 mx-auto text-left">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mr-4 text-left">
              <h4 className="mb-4">
                Trabalhamos atendendo grandes empresas de variados ramos,
                prezamos pela qualidade, bom atendimento e eficiência.
              </h4>
              <p className="leading-8">
                Atendemos não somente clientes do Brasil mas também clientes de
                outros países, nos consideramos uma empresa de âmbito global.
              </p>
              <p className="leading-8">
                Se você estiver interessado em trabalhar conosco, sinta-se à
                vontade para nos ligar hoje ou enviar um e-mail pois assim
                poderemos entrar em contato para conversar sobre o seu projeto.
              </p>
              <p className="leading-8">
                Trabalhamos com análise e levantamento de dados para gerar um
                orçamento preciso, você não terá que pagar nada pois o orçamento
                é totalmente gratuito.
              </p>
            </div>
          </div>
        </div>
        {/* CLIENT LOGO */}
        <div className="container mx-auto">
          <div className="container px-4 py-8 mx-auto mb-24 text-left bg-gray-100 border border-gray-200 rounded-md">
            <div className="flex flex-wrap w-full mr-4">
              <div className="w-1/2 opacity-60 md:w-1/3 lg:w-1/6 hover:opacity-100">
                <Image
                  src="/client-logo-2.png"
                  width={376}
                  height={160}
                  alt="Landpoint Gardens logo"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/6 opacity-60 hover:opacity-100">
                <Image
                  src="/client-logo-1.png"
                  width={376}
                  height={160}
                  alt="Willmott Dixon logo"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/6 opacity-60 hover:opacity-100">
                <Image
                  src="/client-logo-3.png"
                  width={376}
                  height={160}
                  alt="NHS logo"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/6 opacity-60 hover:opacity-100">
                <Image
                  src="/client-logo-4.png"
                  width={376}
                  height={160}
                  alt="Merlin Housing logo"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/6 opacity-60 hover:opacity-100">
                <Image
                  src="/client-logo-5.png"
                  width={376}
                  height={160}
                  alt="Birmingham City Crane Hire logo"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/6 opacity-60 hover:opacity-100">
                <Image
                  src="/client-logo-6.png"
                  width={376}
                  height={160}
                  alt="Jamesons Tyre Company logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WORK */}
      <div className="relative w-full bg-gray-100">
        <div className="container py-20 mx-auto text-left">
          <h2 className="mb-8 text-black">Vamos inovar juntos!</h2>
          <p className="mb-8 text-lg leading-loose text-black">
            Vai ser um grande prazer pra gente ter você como nosso cliente.
            <br />
            Entre em contato com a gente e vamos tirar as idéias do papel e por
            em prática.
          </p>
          <button className="mr-4 btn-blue-2">Entrar em Contato</button>
        </div>
      </div>
    </>
  );
};

export default OurClients;
