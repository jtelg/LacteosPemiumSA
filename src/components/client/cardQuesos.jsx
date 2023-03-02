import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Quesos = ({ prod }) => {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(prod);
  }, [prod]);

  return (
    <div
      className={`h-fit md:w-full w-[90%] md:min-w-full min-w-[90%] md:max-w-auto  max-w-[90%]  bg-[#FAFAFA] rounded-[30px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_5px_rgba(0,0,0,30%)]`}
    >
      <div className="h-[50%] overflow-hidden">
        <img src="/media/quesos.png" alt="quesos" className="w-full h-full" />
      </div>
      <div className="px-4 py-4 md:block hidden h-[40%]">
        <h1 className="text-primary-600 brother-700">
          {data?.modelo ? data.modelo : 'titulo'}
        </h1>
        <p className="h-[50px] overflow-hidden text-ellipsis mb-2 ">
          {data?.descripBreve
            ? data.descripBreve
            : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '}
        </p>
        <button
          onClick={() => router.push(`/productos/${data.idart}`)}
          className="text-primary-600 hover:text-secondary brother-500 w-full border-2 border-primary-600 hover:border-secondary  rounded-[30px] "
        >
          Ver producto
        </button>
      </div>
      <div className="md:hidden flex items-center justify-center py-3 bg-secondary">
        <h1 className="brother-800 text-xl ">QUESO GRUYERITO</h1>
      </div>
    </div>
  );
};

export default Quesos;
