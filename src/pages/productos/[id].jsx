import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import APIConsultas from '../../services/consultas';
import Loading from '../../components/utils/loading';

const ProductoId = ({ id }) => {
  const title = 'Producto [id] | Lacteos Premium S.A';
  const [producto, setProducto] = useState('');
  const [arr_img, setArr_img] = useState([]);

  const fetchData = async (index) => {
    APIConsultas.producto.GET_XID(id, true).then((prop) => {
      setProducto(prop);
    });
  };
  useEffect(() => {
    fetchData(0);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" />
        <link rel="icon" href="/media/logo.png" />
      </Head>
      {typeof producto === 'object' ? (
        <div className="md:pt-[100px] pt-[70px] md:px-[8rem] px-10 mt-8 mb-20">
          <div className="flex gap-24 ">
            <div className="w-[50%] rounded-[30px]">
              <img
                src="/media/quesos.png"
                alt="foto"
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
            <div className="bg-[#FAFAFA] w-[50%] rounded-[30px] p-8 text-primary-500 space-y-3">
              <h1 className="brother-700 text-xl uppercase">
                {producto.modelo}
              </h1>
              <div className="space-y-1">
                <div>
                  <span className="brother-500">Presentación:</span>
                  <p>{producto.presentacion}</p>
                </div>
                <div>
                  <span className="brother-500">Pesos aproximado:</span>
                  <p>{producto.peso} kg</p>
                </div>
                <div>
                  <span className="brother-500">Descripción:</span>
                  <p>{producto.descripcion}</p>
                </div>
                <div>
                  <span className="brother-500">Sabor:</span>
                  <p>{producto.sabor}</p>
                </div>
                <div>
                  <span className="brother-500">
                    Temperatura de Conservación:
                  </span>
                  <p>{producto.temp}</p>
                </div>
                <div>
                  <span className="brother-500">Tiempo de Maduración:</span>
                  <p>{producto.maduracion}</p>
                </div>
              </div>
              <div className="w-full text-center">
                <button className="text-white bg-primary-500 hover:bg-primary-600 w-full rounded-[30px] flex justify-center items-center gap-1">
                  <i className="bx bxl-whatsapp text-2xl"></i>Consultar vía
                  Whatsapp
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};
export async function getServerSideProps(context) {
  const id = context.query.id;

  return {
    props: {
      id: id
    }
  };
}

export default ProductoId;
