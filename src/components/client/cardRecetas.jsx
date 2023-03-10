import React from 'react';
import { useRouter } from 'next/router';

const Recetas = ({ data }) => {
  const router = useRouter();
  return (
    <div className="bg-[#FAFAFA]  md:min-w-[20%] min-w-[90%] text-start rounded-[30px] shadow-[0_2px_5px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_5px_rgba(0,0,0,30%)] ">
      <img src="/media/recetas.png" alt="quesos" className="w-full" />
      <div className="px-4 py-4 ">
        <h1 className="text-primary-600 brother-700 ">{data?.modelo}</h1>
        <p className="h-[60px] leading-5 text-sm overflow-hidden text-ellipsis">
          {data?.descripcion}
        </p>
        <button
          onClick={() => router.push(`/recetas/${data.idart}`)}
          className="text-primary-600 hover:text-secondary brother-500 w-full border-2 border-primary-600 hover:border-secondary  rounded-[30px] "
        >
          Ver receta completa
        </button>
      </div>
    </div>
  );
};

export default Recetas;
