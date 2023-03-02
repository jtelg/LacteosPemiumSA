import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Quesos from '../../components/client/cardQuesos';
import { useRouter } from 'next/router';
import APIConsultas from '../../services/consultas';
import Loading from '../../components/utils/loading';
import { useSelector } from 'react-redux';

const Productos = ({ query }) => {
  const title = 'Productos | Lacteos Premium S.A';
  const router = useRouter();
  const [arr_categs, setArr_categs] = useState();
  const state = useSelector((s) => s);
  const [filtro, setFiltro] = useState([]);
  const [boton, setBoton] = useState();

  let categs = [];
  const fetchData = async (index, filtro) => {
    setBoton(Number(filtro));
    APIConsultas.subCategorias.GET_XID(2, true).then((repscateg) => {
      categs = repscateg.filter((c) => c.nombre !== 'No definido');
      categs.unshift({ idcateg: '0', idsubc: 0, nombre: 'Todas' });
      categs.forEach((categ) => {
        categ.ref = 'Categoria';
      });
      setArr_categs(categs);
    });
  };
  useEffect(() => {
    fetchData(0, query);
    // console.log(state);
    setFiltro(state.productos);
  }, [router, state]);

  const routeo = (id) => {
    router.push(`productos?categ=${id}`);
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" />
        <link rel="icon" href="/media/logo.png" />
      </Head>
      {filtro?.length > 0 ? (
        <div className="md:pt-[100px] pt-[70px] md:px-[8rem] px-10">
          <div className="w-full text-center">
            <h2 className="md:text-[50px] text-[30px] brother-800">
              Nuestros productos
            </h2>
          </div>
          <div className=" flex lg:flex-row flex-col justify-center gap-6 my-8">
            <div className="lg:w-[220px] h-full w-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.1)] rounded-[30px] lg:py-[1rem] py-[.5rem] lg:px-0 px-[1rem] flex flex-col gap-2 ">
              {/* Filtrado Desktop */}
              <h1 className="px-[1rem] text-[20px] text-primary-500 brother-800 lg:block hidden">
                CATEGORÍAS
              </h1>
              <ul className="w-full px-[1rem] lg:block hidden">
                {arr_categs?.map((e, i) => (
                  <li
                    key={i}
                    onClick={() => routeo(e.idsubc)}
                    className={`w-full flex justify-between items-center mb-[10px] cursor-pointer overflow-hidden brother-500 ${
                      boton === e.idsubc ? 'text-primary-500 ' : ''
                    } `}
                  >
                    <span className={`text-[16px] `}>{e.nombre}</span>
                    <i
                      className={`bx bx-chevron-up  text-[30px] duration-700 ${
                        boton === e.idsubc && 'rotate-90'
                      } `}
                    ></i>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-[80%] min-h-[calc(100vh-115px)] grid md:grid-cols-3 grid-cols-1 gap-8 ">
              {filtro.map((e, i) => (
                <Quesos key={i} prod={e}></Quesos>
              ))}
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
  const categ = context.query.categ || 0;

  return {
    props: {
      query: categ
    }
  };
}
export default Productos;
