import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';

const Novedades = () => {
  const title = 'Novedades | Lacteos Premium S.A';

  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:pt-[100px] pt-[70px] md:px-[8rem] px-10">
        <div className="w-full text-center">
          <h2 className="md:text-[50px] text-[30px] brother-800">Novedades</h2>
        </div>
        <div className="grid grid-cols-2 gap-16 my-12">
          {[1, 2, 3, 4, 5, 6].map((e, i) => (
            <div className="flex md:flex-row flex-col bg-[#FAFAFA] rounded-[30px] shadow-[0_2px_5px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_5px_rgba(0,0,0,30%)] h-[250px]">
              <div className="w-[50%]">
                <img
                  src="/media/home2.png"
                  alt="foto"
                  className="h-full w-full object-cover  rounded-[30px] "
                />
              </div>
              <div className="p-4 w-[50%] flex flex-col justify-between">
                <h2 className="text-base font-black leading-5">
                  Lácteos Premium participó del 3° Concurso de Quesos y 2°
                  Concurso de Dulce de Leche y Manteca
                </h2>
                <p className=" text-sm leading-4 text-ellipsis overflow-hidden">
                  El certamen fue organizado por el Ministerio de Agricultura y
                  Ganadería, la Asociación de Pequeños y Medianos Empresarios
                  Lácteos (Apymel)
                </p>
                <button
                  onClick={() => router.push('/novedades/noticia')}
                  className="mt-2  py-1 w-full text-primary-500 hover:text-secondary     text-sm bg-white  brother-500  border-2 border-primary-500 hover:border-secondary rounded-[30px] "
                >
                  Leer noticia completa
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Novedades;
