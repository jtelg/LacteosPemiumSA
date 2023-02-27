import React from 'react';
import Quesos from './cardQuesos';
import Recetas from './cardRecetas';

const Home = () => {
  return (
    <div className="pt-[80px]">
      <div>
        <img src="/media/home.png" alt="home" className="w-full" />
      </div>
      <div className="flex pt-24 h-screen">
        <div className="w-[50%] bg-primary-600 text-white text-center px-32 flex flex-col justify-around">
          <h2 className="text-[60px] font-bold leading-[4rem] px-10 ">
            Los más
            <span className="text-secondary brother-800"> Premiados</span> de la
            región
          </h2>
          <div>
            <span className="text-[14px] brother-700">
              AÑO 2021: 2DO CONCURSO PROVINCIAL DE QUESOS
            </span>
            <p className="text-[12px]">
              1er premio queso Holanda en categoría quesos semiduros con ojos.
              1er premio queso Morbier en categoría quesos semiduros sin ojos.
              2do premio queso Marbled en categoria quesos saborizados y
              especiados.
            </p>
          </div>
          <div>
            <span className="text-[14px] brother-700">
              AÑO 2022: 3ER CONCURSO PROVINCIAL DE QUESOS
            </span>
            <p className="text-[12px]">
              1er premio queso Holanda en categoría quesos semiduros con ojos.
              1er premio queso Morbier en categoría quesos semiduros sin ojos.
              2do premio queso Marbled en categoria quesos saborizados y
              especiados.
            </p>
          </div>
          <div className="text-center flex justify-center">
            <img src="media/logoAmarillo.png" alt="logo" />
          </div>
        </div>
        <div className="w-[50%] overflow-hidden">
          <img src="/media/home2.png" alt="home" />
        </div>
      </div>
      <div className="h-screen pt-24 ">
        <div className="w-full text-center">
          <h2 className="text-[50px] brother-800">Nuestros quesos</h2>
        </div>
        <div className="flex md:px-[8rem] px-10 gap-8  my-6">
          {[1, 2, 3, 4].map((q, i) => (
            <Quesos key={i}></Quesos>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-primary-500 hover:bg-primary-600 brother-500  border-2 border-primary-500 hover:border-primary-600  rounded-[30px] px-4 py-1 ">
            Conoce todos nuestros productos
          </button>
        </div>
      </div>
      <div className="h-screen">
        <div className="w-full text-center">
          <h2 className="text-[50px] brother-800">Últimas novedades</h2>
        </div>
      </div>
      <div className="h-screen bg-primary-500">
        <div className="w-full">
          <h2 className="text-[50px] brother-800 text-white text-center">
            Recetas con Lácteos Premium
          </h2>
          <div className="flex md:px-[8rem] px-10 gap-8  my-6">
            {[1, 2, 3, 4].map((q, i) => (
              <Recetas key={i}></Recetas>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-primary-500 bg-white hover:bg-[#ece4e4] brother-500  border-2 border-primary-500  rounded-[30px] px-4 py-1 ">
              Aprende todas nuestras recetas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
