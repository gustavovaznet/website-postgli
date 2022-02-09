//WHO WE ARE PAGE

//IMPORTING
import Head from 'next/head';
import Image from 'next/image';

//WHOWEARE
const WhoWeAre = () => {
  return (
    <>
      <Head>
        <title>Postgli | Marketing, Publicidade e Propaganda</title>
      </Head>
      {/* HEADER */}
      <div className="relative z-0 w-full pt-24 text-white bg-cover bg-home-header">
        {/* HERO */}
        <div className="z-20 flex flex-col items-start justify-center py-12">
          <div className="container z-20 mx-auto motion-safe:animate-fadeSlideUp">
            <h6 className="z-20 mb-0 font-normal tracking-wider text-left text-gray-500 uppercase">
              Sobre
            </h6>
            <h1 className="z-20 w-4/5 mb-0 leading-tight text-left text-white">
              Quem somos nós
            </h1>
          </div>
        </div>
      </div>
      {/* TEAM */}
      <div className="relative w-full bg-white">
        <div className="container py-16 mx-auto text-left">
          <h2 className="mb-8">A Postgli</h2>
          <p className="mb-16 text-xl">
            Fundada em 2016 por Paulo José e Denise Glukovisky a Postgli é uma
            empresa inovadora, líder de mercado e com espirito de startup,
            pronta para atender qualquer demanda e disposta a encarar todos os
            desafios e projetos que aparecerem pela frente.
          </p>
          <p className="mb-16 text-xl">
            Nosso objetivo era, é e sempre será o de agregar valor aos nossos
            clientes com muita qualidade, eficiência, honestidade e preço justo,
            caminhamos de forma acelerada, crescendo junto com nossos clientes.
          </p>
          <p className="mb-16 text-xl">
            Aprendendo e melhorando a cada dia, aqui sempre há margem para
            melhorias, não importa aonde, quando ou com quem estamos, sempre
            buscaremos melhorar e aprefeiçoar todos os nossos serviços. Nossos
            pilares são inovação, tranformação e dinamismo.
          </p>
        </div>
      </div>
      {/* WORK */}
      <div className="relative w-full bg-gray-100">
        <div className="container py-20 mx-auto text-left">
          <h2 className="mb-8 text-black">
            Ficou interessado e quer saber mais?
          </h2>
          <p className="mb-8 text-lg text-black">
            Que tal conversar com um de nossos especialistas, faremos um
            levantamento da sua empresa e da sua atual situação no mercado, com
            base em todas as informações geramos um orçamento detalhado e sem
            compromisso. Vamos lá é de graça! :)
          </p>
          <button className="mr-4 btn-blue-2">Entrar em Contato</button>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
