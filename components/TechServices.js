//TECHSERVICES COMPONENT

//IMPORTING
//REACT
import React from 'react';
//NEXT
import Image from 'next/image';

//VIDEO SERVICES
const TechServices = () => {
  //RETURN
  return (
    <div className="w-full flex mt-4 flex-col md:flex-row">
      {/* PROMOTIONAL */}
      <div className="w-full md:w-1/3 p-4 flex flex-col">
        <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
          <Image
            src="/service-02.svg"
            alt="Service"
            width={1426}
            height={1198}
          />
        </div>
        <h5 className="my-4">Websites</h5>
        <p className="mb-4">
          Criamos o seu website personalizado, responsivo e com as melhores
          práticas de SEO do mercado, usamos a tecnologia para fazer o seu
          negócio decolar.
        </p>
      </div>
      {/* COMMUNICATIONS */}
      <div className="w-full md:w-1/3 p-4 flex flex-col">
        <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
          <Image
            src="/service-04.svg"
            alt="Service"
            width={1426}
            height={1198}
          />
        </div>
        <h5 className="my-4">Aplicativos</h5>
        <p className="mb-4">
          Nossa equipe de tecnologia trabalha utilizando as melhores práticas do
          mercado para garantir que as aplicações da sua empresa possam ser
          desenvolvidas com muita qualidade.
        </p>
      </div>
      {/* TESTIMONIALS */}
      <div className="w-full md:w-1/3 p-4 flex flex-col">
        <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
          <Image
            src="/service-03.svg"
            alt="Service"
            width={1426}
            height={1198}
          />
        </div>
        <h5 className="my-4">Landing Pages</h5>
        <p className="mb-4">
          Criamos também landing pages promocionais para sua empresa, uma
          ferramenta poderosa para atrair cada vez mais clientes para o seu
          negócio.
        </p>
      </div>
    </div>
  );
};

//EXPORTING TECHSERVICES
export default TechServices;
