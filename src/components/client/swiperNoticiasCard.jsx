import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

const NoticiasCard = () => {
  const [swiper, setSwiper] = useState(2);
  useEffect(() => {
    if (document.body.clientWidth <= 768) {
      setSwiper(1);
    }
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={swiper}
        spaceBetween={30}
        centeredSlides={true}
        initialSlide={1}
        navigation={{
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {[1, 2, 3, 4, 5].map((e, i) => (
          <SwiperSlide
            key={i}
            className="md:py-[4rem] py-[2rem] md:w-auto w-[90%] md:px-0 px-10"
          >
            <div className="flex md:flex-row flex-col bg-[#FAFAFA] rounded-[30px] shadow-[0_2px_5px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_5px_rgba(0,0,0,30%)]">
              <div>
                <img
                  src="/media/home2.png"
                  alt="foto"
                  className="h-full object-cover  rounded-[30px]"
                />
              </div>
              <div className="p-4 space-y-2">
                <h2 className="text-base font-black">
                  Lácteos Premium participó del 3° Concurso de Quesos y 2°
                  Concurso de Dulce de Leche y Manteca
                </h2>
                <p className=" text-sm overflow-hidden text-ellipsis">
                  El certamen fue organizado por el Ministerio de Agricultura y
                  Ganadería, la Asociación de Pequeños y Medianos Empresarios
                  Lácteos (Apymel) […]
                </p>
                <button className="mt-2  py-1 w-full text-primary-500 text-sm bg-white hover:bg-[#ece4e4] brother-500  border-2 border-primary-500  rounded-[30px] ">
                  Leer noticia completa
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default NoticiasCard;
