import React from 'react';
import Quesos from './cardQuesos';
import Recetas from './cardRecetas';
import NoticiasCard from './swiperNoticiasCard';

const Home = () => {
  return (
    <div className="md:pt-[80px] pt-[70px]">
      <div>
        <img src="/media/home.png" alt="home" className="w-full" />
      </div>
      <div className="flex md:flex-row flex-col pt-24 h-screen">
        <div className="md:w-[50%] md:h-auto h-[60%]  bg-primary-600 text-white text-center md:px-32 flex flex-col justify-around">
          <h2 className="md:text-[60px] text-[50px] font-bold md:leading-[4rem] leading-[3rem] md:px-10 px-12 ">
            Los más
            <span className="text-secondary brother-800"> Premiados</span> de la
            región
          </h2>
          <div className="md:block hidden">
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
          <div className="md:block hidden">
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
        <div className="md:w-[50%] overflow-hidden">
          <img src="/media/home2.png" alt="home" className="w-full" />
        </div>
      </div>
      <div className="md:h-screen h-[80vh] pt-24 ">
        <div className="w-full text-center">
          <h2 className="md:text-[50px] text-[30px] brother-800">
            Nuestros quesos
          </h2>
        </div>
        <div className="flex md:px-[8rem] px-10 gap-8  my-6 md:overflow-auto overflow-x-scroll">
          {[1, 2, 3, 4].map((q, i) => (
            <Quesos key={i}></Quesos>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-white md:text-[20px] text-[18px]  bg-primary-500 hover:bg-primary-600 brother-500  border-2 border-primary-500 hover:border-primary-600  rounded-[30px] px-4 py-1 ">
            Conoce todos nuestros productos
          </button>
        </div>
      </div>
      <div className="h-screen md:mt-16">
        <div className="w-full text-center">
          <h2 className="md:text-[50px] text-[30px] brother-800">
            Últimas novedades
          </h2>
        </div>
        <div className="md:pl-[8rem]">
          <NoticiasCard></NoticiasCard>
        </div>
        <div className="flex justify-center">
          <button className="text-white md:text-[20px] text-[18px]  bg-primary-500 hover:bg-primary-600 brother-500  border-2 border-primary-500 hover:border-primary-600  rounded-[30px] px-4 py-1 ">
            Enterate de todas las novedades
          </button>
        </div>
      </div>
      <div className="h-screen ">
        <div className="w-full bg-primary-500 pb-8">
          <h2 className="md:text-[50px] text-[25px] brother-800 text-white text-center">
            Recetas con Lácteos Premium
          </h2>
          <div className="flex md:px-[8rem] px-10 gap-8  my-6 md:overflow-auto overflow-x-scroll">
            {[1, 2, 3, 4].map((q, i) => (
              <Recetas key={i}></Recetas>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-primary-500 md:text-[20px] text-[18px]  bg-white hover:bg-[#ece4e4] brother-500  border-2 border-primary-500  rounded-[30px] px-4 py-1 ">
              Aprende todas nuestras recetas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
