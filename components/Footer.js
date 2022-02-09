//FOOTER COMPONENT

//IMPORTING
//NEXT COMPONENTS
import Image from 'next/image';
import Link from 'next/link';

//FOOTER
const Footer = () => {
  //RETURN
  return (
    <>
      {/* FOOTER */}
      <footer className="relative bg-black w-full">
        <div className="container mx-auto py-20 flex flex-col">
          <div className="flex flex-col md:flex-row items-start">
            {/* ABOUT */}
            <div className="w-full md:w-1/3 lg:w-3/5">
              {/* HEADER */}
              <div className="h-20">
                <div className="object-scale-down w-40 mr-auto z-20 mb-8 h-10">
                  <Image src="/logo.svg" width={1550} height={421} />
                </div>
              </div>
              {/* CONTENT */}
              <div className="w-full md:w-4/5 text-left">
                <p className="text-white mb-4 text-tiny">
                  Reconstruimos o seu negócio através das melhores prática e
                  estratégias de marketing do mercado, procurando sempre o
                  crescimento e expansão sem nunca esquecer da inovação.
                </p>
                <p className="text-white mb-4 text-tiny">
                  Temos orgulho de nossos altos padrões, desde o conceito até a
                  conclusão.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-2/3 lg:w-2/5">
              {/* MENU */}
              <div className="w-full sm:w-1/2 flex flex-col text-left">
                {/* HEADER */}
                <div className="h-auto mt-8 md:mt-0 md:h-20">
                  <h4 className="h-10 text-white">Menu</h4>
                </div>
                {/* CONTENT */}
                <div>
                  <Link href="/">
                    <a className="v-nav">Home</a>
                  </Link>
                </div>
                <div>
                  <Link href="/who-we-are" className="v-nav">
                    <a className="v-nav">Sobre nós</a>
                  </Link>
                </div>
                <div>
                  <Link href="/what-we-do" className="v-nav">
                    <a className="v-nav">Serviços</a>
                  </Link>
                </div>
                <div>
                  <Link href="/clients" className="v-nav">
                    <a className="v-nav">Clientes</a>
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="v-nav">
                    <a className="v-nav">Contato</a>
                  </Link>
                </div>
              </div>
              {/* CONTACT */}
              <div className="w-full sm:w-1/2 flex flex-col text-left">
                {/* HEADER */}
                <div className="h-auto mt-8 md:mt-0 md:h-20">
                  <h4 className="h-10 text-white">Fale Conosco</h4>
                </div>
                {/* CONTENT */}
                <div>
                  <a
                    href={`mailto:info@wearespotlight.co.uk`}
                    className="v-nav items-center"
                  >
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
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    <span className="ml-2">contato@postgli.com.br</span>
                  </a>
                </div>
                <div>
                  <a href={`tel:+447717131511`} className="v-nav items-center">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="ml-2">+55 (41) 3355-9000</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start mt-8 pt-8 border-t-2 border-gray-900">
            <div className="w-full md:w-1/2 text-left">
              <p className="text-white leading-8">
                &copy; Postgli Marketing 2021-2022 | Todos os direitos
                reservados.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-left md:text-right flex justify-start md:justify-end items-center">
              <div className="h-nav">
                <a>
                  <Image src="/social-01.png" width={25} height={25} />
                </a>
              </div>
              <div className="h-nav">
                <a>
                  <Image src="/social-02.png" width={25} height={25} />
                </a>
              </div>
              <div className="h-nav">
                <a>
                  <Image src="/social-03.png" width={25} height={25} />
                </a>
              </div>
              <div className="h-nav">
                <a>
                  <Image src="/social-04.png" width={25} height={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

//EXPORTING FOOTER
export default Footer;
