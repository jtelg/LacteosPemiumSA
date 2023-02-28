import React from 'react';

const Empresa = () => {
  return (
    <div className="md:pt-[100px] pt-[70px] md:px-[8rem] px-10">
      <div className="w-full text-center">
        <h2 className="md:text-[50px] text-[30px] brother-800">
          ¿Quiénes somos?
        </h2>
      </div>
      <div className="flex flex-col gap-16 mt-8">
        <div className="flex items-center gap-8">
          <div className="w-full">
            <p className="text-[18px]">
              <b>Lacteos Premium S.A.</b> es una empresa familiar , ubicada en
              una de las cuencas lecheras mas importante del país. Su presidente
              tiene una larga trayectoria dentro de la industria láctea
              provincial y nacional ya que adquirió una vasta experiencia en
              empresas como La Serenisima, Milkaut y La Paulina-Molfino (Pérez
              Companc). Los objetivos básico de esta empresa elaboradora de
              productos puramente artesanales es “cuidar y conservar la calidad
              desde su origen (el tambo), seguir por el transporte, la
              elaboración hasta llegar al consumidor.
            </p>
          </div>
          <div className="w-full">
            <img src="/media/empresa2.png" alt="empresa" className="w-full" />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="w-full">
            <img
              src="/media/empresa1.png"
              alt="empresa"
              className="w-full h-full"
            />
          </div>
          <div className="w-full text-[18px]">
            <span>
              <b>Nuestros controles de calidad son estrictos.</b>
            </span>
            <p>
              En el tambo se efectúa el control de la materia prima (leche)
              efectuándole prueba de alcohol, control de la temperatura y
              antibióticos. En la fabrica cuando se recibe el transporte se
              vuelven a repetir estas pruebas. Ademas se agregan: control de
              acidéz, bacterias, conteo de células somáticas, porcentaje de
              grasa butirosa, proteína y crioscopía. Los tambos que nos remiten
              su producción, cumplen con los parámetros de calidad sanitaria y
              son libres de brucelosis y tuberculosis. Cerramos el año con una
              producción de 18.250.000 de litros y nuestro objetivo es seguir
              creciendo hasta poder satisfacer la demanda de nuestros productos
            </p>
          </div>
        </div>
      </div>
      <div className="my-24 bg-primary-500 rounded-[30px] flex flex-col gap-6 py-6 items-center text-white">
        <h2 className=" brother-800 text-[30px]">
          Política de Calidad e Inocuidad
        </h2>
        <div>
          <button className="text-white hover:text-secondary  brother-500 w-full border-2 border-white hover:border-secondary  rounded-[30px] px-6 py-1 ">
            Ver nuestras políticas
          </button>
        </div>
      </div>
      <div className="my-24 bg-primary-500 rounded-[30px] flex flex-col gap-6 py-6 px-10  items-center text-white">
        <h2 className=" brother-800 text-[30px]">Nuestros certificaciones</h2>
        <p>
          Lácteos Premium tiene certificados sus sistemas de gestión de la
          Calidad, sistema de análisis de peligros y puntos críticos de control-
          HACCP y Buenas Prácticas de Manufactura – BPM, por IRAM según las
          normas: ISO 9001:2015, IRAM NM 323:2010 e IRAM NM 324:2010 con los
          siguientes números de registros respectivamente: RI-9000 – 9980,
          DC/QAH L-017/1 y DC/QAB L-024/1
        </p>
        <div className="flex justify-between w-full gap-4">
          <button className="text-white text-sm hover:text-secondary  brother-500 w-full border-2 border-white hover:border-secondary  rounded-[30px] px-2 py-1 ">
            Cert. Gestión de la Calidad
          </button>
          <button className="text-white text-sm hover:text-secondary  brother-500 w-full border-2 border-white hover:border-secondary  rounded-[30px] px-2 py-1 ">
            Cert. Sist. de análisis de peligros
          </button>
          <button className="text-white text-sm hover:text-secondary  brother-500 w-full border-2 border-white hover:border-secondary  rounded-[30px] px-2 py-1 ">
            Cert. Puntos críticos de control
          </button>
          <button className="text-white text-sm hover:text-secondary  brother-500 w-full border-2 border-white hover:border-secondary  rounded-[30px] px-2 py-1 ">
            Cert. Buenas Prácticas de Manufactura
          </button>
        </div>
      </div>
    </div>
  );
};

export default Empresa;
