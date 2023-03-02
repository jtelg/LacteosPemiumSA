import React from 'react';

const Footer = () => {
  return (
    <footer className="w-screen bg-primary-500 flex md:flex-row flex-col justify-between items-center md:px-[8rem] px-10  py-8 text-white">
      <div className="text-center  flex items-center justify-center">
        <img
          src="/media/logoFooter.png"
          alt="logo"
          className="md:w-[90%] w-[80%]"
        />
      </div>
      <div className="text-center  flex items-center justify-center">
        <p className="w-[75%] text-[14px]">
          Desde la cuenca láctea más importante de la República Argentina,
          Estilo Artesanal es elaborado por Lácteos Premium S.A. Una larga
          trayectoria y calidad reconocida a nivel nacional.
        </p>
      </div>
      <div className="text-center flex flex-col gap-4 items-center justify-center">
        <ul className="w-[90%] text-[12px]">
          <li className="flex justify-center">
            <i className="bx bxs-map text-[18px]"></i>(0353) 448323 / 24
          </li>
          <li className="flex">
            <i className="bx bxs-phone text-[18px]"></i>
            Camino a la Herradura 900 mts del cruce de ruta N°2 y N°4, Villa
            Nueva, Provincia de Córdoba, Argentina
          </li>
        </ul>
        <div className="text-secondary">
          <i className="bx bxl-instagram text-[30px]"></i>
          <i className="bx bxl-facebook text-[30px]"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
