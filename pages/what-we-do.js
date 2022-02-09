//WHAT WE DO PAGE

//IMPORTING
import React, { useState } from 'react';
import Animated from 'react-mount-animation';
import Head from 'next/head';
import TechServices from '../components/TechServices';
import SocialServices from '../components/SocialServices';
import AdServices from '../components/AdServices';

//WHATWEDO
const WhatWeDo = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [showWeb, setShowWeb] = useState(false);
  const [showDesign, setShowDesign] = useState(false);

  //ANIMATION
  const mountAnimation1 = `
    0% {opacity: 0}
    30% {opacity: 0}
    100% {opacity: 1}
    `;

  //HANDLE VIDEO CONTENT
  const handleVideoContent = (e) => {
    e.preventDefault();
    setShowWeb(false);
    setShowDesign(false);
    setShowVideo(true);
  };

  //HANDLE WEB CONTENT
  const handleWebContent = (e) => {
    e.preventDefault();
    setShowVideo(false);
    setShowDesign(false);
    setShowWeb(true);
  };

  //HANDLE DESIGN CONTENT
  const handleDesignContent = (e) => {
    e.preventDefault();
    setShowVideo(false);
    setShowWeb(false);
    setShowDesign(true);
  };
  //RETURN
  return (
    <>
      <Head>
        <title>Postgli | Marketing, Publicidade e Propaganda</title>
      </Head>
      {/* HEADER */}
      <div className="bg-gray-900">
        <div className="relative z-0 w-full pt-24 text-white bg-cover bg-opacity-20 bg-home-header">
          {/* HERO */}
          <div className="z-20 flex flex-col items-start justify-center py-12">
            <div className="container z-20 mx-auto motion-safe:animate-fadeSlideUp">
              <h6 className="z-20 mb-0 font-normal tracking-wider text-left text-gray-500 uppercase">
                Nossos Serviços
              </h6>
              <h1 className="z-20 w-4/5 mb-0 leading-tight text-left text-white">
                Marketing, Publicidade e Propaganda
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="relative w-full bg-white">
        <div className="container flex flex-col py-16 mx-auto">
          <p className="mb-8 text-xl">
            Reconstruimos o seu negócio através das melhores prática e
            estratégias de marketing do mercado, procurando sempre o crescimento
            e expansão sem nunca esquecer da inovação.
          </p>
          <div className="flex w-full bg-white border-0">
            <a
              href="#"
              onClick={handleVideoContent}
              className={`flex items-center w-1/3 transition-all duration-500  ease-in-out p-4 border-2 border-white text-center ${
                showVideo ? 'bg-blue' : 'bg-gray-200'
              } `}
            >
              {/* TECH */}
              <p className="mx-auto mb-0 text-base font-bold tracking-tight md:text-xl">
                Tecnologia
              </p>
            </a>
            <a
              href="#"
              onClick={handleWebContent}
              className={`flex items-center w-1/3 transition-all duration-500 p-4 border-2 border-white text-center ${
                showWeb ? 'bg-blue' : 'bg-gray-200'
              } `}
            >
              {/* SOCIAL */}
              <p className="mx-auto mb-0 text-base font-bold tracking-tight md:text-xl">
                Redes Sociais
              </p>
            </a>
            <a
              href="#"
              onClick={handleDesignContent}
              className={`flex items-center w-1/3 transition-all duration-500 p-4 border-2 border-white text-center ${
                showDesign ? 'bg-blue' : 'bg-gray-200'
              } `}
            >
              {/* AD */}
              <p className="mx-auto mb-0 text-base font-bold tracking-tight md:text-xl">
                Anúncios
              </p>
            </a>
          </div>
          <div className="flex w-full">
            {showVideo ? (
              <Animated.div
                key={1}
                show={showVideo.toString()}
                mountAnim={mountAnimation1}
                time={1.1}
              >
                <TechServices />
              </Animated.div>
            ) : showWeb ? (
              <Animated.div
                key={2}
                show={showWeb.toString()}
                mountAnim={mountAnimation1}
                time={1.1}
              >
                <SocialServices />
              </Animated.div>
            ) : showDesign ? (
              <Animated.div
                key={3}
                show={showDesign.toString()}
                mountAnim={mountAnimation1}
                time={1.1}
              >
                <AdServices />
              </Animated.div>
            ) : null}
          </div>
        </div>
      </div>
      {/* WORK */}
      <div className="relative w-full bg-gray-100">
        <div className="container py-20 mx-auto text-left">
          <h2 className="mb-8 text-black">Ficou interessado?</h2>
          <p className="mb-8 text-lg text-black">
            Que tal conversar com um de nossos especialistas, faremos um
            levantamento da sua empresa e da sua atual situação no mercado, com
            base em todas as informações geramos um orçamento detalhado e sem
            compromisso. Vamos lá é de graça! :)
          </p>
          <button className="mr-4 btn-blue-2">Consultar Especialista</button>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
