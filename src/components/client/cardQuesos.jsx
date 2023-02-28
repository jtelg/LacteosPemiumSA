import React from 'react';

const Quesos = () => {
  return (
    <div className="md:min-w-[20%] min-w-[90%] bg-[#FAFAFA] rounded-[30px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_5px_rgba(0,0,0,30%)] ">
      <img src="/media/quesos.png" alt="quesos" className="w-full" />
      <div className="px-4 py-4 md:block hidden">
        <h1 className="text-primary-600 brother-700">Titulo</h1>
        <p className="h-[60px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="text-primary-600 hover:text-secondary brother-500 w-full border-2 border-primary-600 hover:border-secondary  rounded-[30px] ">
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
