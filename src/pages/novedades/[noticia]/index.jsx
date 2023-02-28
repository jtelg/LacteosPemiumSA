import React from 'react';

const Noticia = () => {
  return (
    <div className="md:pt-[100px] pt-[70px] md:px-[8rem] px-10">
      <div className="flex flex-col items-center justify-center w-[70%]">
        <div className="w-full max-h-[400px] overflow-hidden rounded-[30px]">
          <img
            src="/media/home2.png"
            alt="foto"
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] brother-500 text-primary-600">
            Lácteos Premium participó del 3° Concurso de Quesos y 2° Concurso de
            Dulce de Leche y Manteca
          </h2>
          <span className="text-primary-500 text-xs">14 noviembre, 2022</span>
          <div className="text-sm">
            El certamen fue organizado por el Ministerio de Agricultura y
            Ganadería, la Asociación de Pequeños y Medianos Empresarios Lácteos
            (Apymel) y la Escuela Superior de Lechería de Villa María (ESIL).
            Participaron 33 pequeñas y medianas empresas cordobesas, gran parte
            de las cuales son empresas familiares que, gracias al trabajo
            constante y la incorporación de tecnología logran productos de
            calidad. Pusimos en valor a la cadena láctea, que es tan importante
            para nuestra provincia. Es un reconocimiento a las empresas y
            trabajadores, a la producción y a lo que genera el interior
            productivo”, afirmó el ministro de Agricultura y Ganadería, Sergio
            Busso. Agradecemos los siguientes premios: Primer Premio en la
            categoría quesos blandos: Queso MonPrem Primer Premio en la
            categoría de quesos semiduros con ojos: Queso Gruyerito Tercer
            Premio en la categoría de quesos saborizados y especiados: Queso
            Marbled Es un orgullo para nuestra empresa recibir estos
            reconocimientos. Agradecemos a cada uno de los que forman parte de
            Lácteos Premium, desde nuestro equipo de trabajo hasta asesores y
            productores, ya que son un eslabón muy importante en nuestra cadena
            productiva y sin ellos no sería posible.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
