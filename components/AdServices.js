//AD SERVICES COMPONENT

//IMPORTING
//REACT
import React from 'react';
//NEXT
import Image from 'next/image';

//ADSERVICES SERVICES
const AdServices = () => {
  //RETURN
  return (
    <div className="w-full flex mt-4 flex-col md:flex-row">
      {/* BRAND */}
      <div className="w-full md:w-1/3 p-4 flex flex-col">
        <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
          <Image
            src="/service-03.svg"
            alt="Service"
            width={1426}
            height={1198}
          />
        </div>
        <h5 className="my-4">Campanhas</h5>
        <p className="mb-4">
          Desenvolvemos campanhas físicas e campanhas online, apesar de muitas
          pessoas terem acesso a internet, sabemos que muitos ainda não possuem
          então queremos ter certeza que sua marca chegará a todos sem nenhuma
          excessão.
        </p>
      </div>
      {/* GRAPHICS */}
      <div className="w-full md:w-1/3 p-4 flex flex-col">
        <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
          <Image
            src="/service-08.svg"
            alt="Service"
            width={1426}
            height={1198}
          />
        </div>
        <h5 className="my-4">Pesquisas</h5>
        <p className="mb-4">
          Possuímos um time de expecialistas dedicados a pesquisa de novas
          técnicas e novas tendências de mercado, tudo isso para ter certeza que
          estamos praticando o que tem de melhor e mais moderno diretamente no
          seu projeto.
        </p>
      </div>
      {/* SSA */}
      <div className="w-full md:w-1/3 p-4 flex flex-col">
        <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
          <Image
            src="/service-06.svg"
            alt="Service"
            width={1426}
            height={1198}
          />
        </div>
        <h5 className="my-4">Feedback</h5>
        <p className="mb-4">
          Trabalhamos de forma clara e honesta, entregando valor e feedback
          contínuo para o cliente, todos os nosso feedback são baseados nas
          opniões que coletamos nas campanhas organizadas para sua empresa.
        </p>
      </div>
    </div>
  );
};

//EXPORTING ADSERVICES
export default AdServices;
