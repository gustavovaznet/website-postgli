//SOCIAL SERVICES COMPONENT

//IMPORTING
//REACT
import React from 'react';
//NEXT
import Image from 'next/image';

//SOCIALSERVICES
const SocialServices = () => {
  //RETURN
  return (
    <div className="w-full flex mt-4 flex-col md:flex-row">
      {/* RESPONSIVE */}
      <div className="w-full md:w-1/3 p-4 flex flex-col">
        <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
          <Image
            src="/service-05.svg"
            alt="Service"
            width={1426}
            height={1198}
          />
        </div>
        <h5 className="my-4">Redes Sociais</h5>
        <p className="mb-4">
          Promovemos o seu negócio nas principais redes sociais do momento como
          Instagram, Facebook, Twitter, Snapchat e muito mais.
        </p>
      </div>
      {/* SOCIAL MEDIA */}
      <div className="w-full md:w-1/3 p-4 flex flex-col">
        <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
          <Image
            src="/service-07.svg"
            alt="Service"
            width={1426}
            height={1198}
          />
        </div>
        <h5 className="my-4">Audiovisual</h5>
        <p className="mb-4">
          Usamos por exemplo o Youtube como ferramenta para inovar o seu negócio
          de maneira com que vários clientes vejam os seus produtos e serviços
          de maneira mais clara.
        </p>
      </div>
      {/* OPTIMIZATION */}
      <div className="w-full md:w-1/3 p-4 flex flex-col">
        <div className="w-1/6 md:w-1/3 xl:w-1/5 mr-auto flex transition duration-500 ease-in-out transform hover:scale-125">
          <Image
            src="/service-06.svg"
            alt="Service"
            width={1426}
            height={1198}
          />
        </div>
        <h5 className="my-4">Parcerias</h5>
        <p className="mb-4">
          Possuímos diversos parceiros comerciais afim de agregar valor nas
          campanhas de nossos clientes, os mesmos recomendam ou até mesmo
          contratam serviços dos nossos clientes formando assim uma corrente de
          negócios.
        </p>
      </div>
    </div>
  );
};

//EXPORTING SOCIALSERVICES
export default SocialServices;
