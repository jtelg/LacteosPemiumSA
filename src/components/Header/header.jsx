import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Desktop from './desktop';
import Mobile from './mobile';

const Header = () => {
  const state = useSelector((s) => s);

  return (
    <header className="w-screen md:h-auto h-[70px]  bg-primary-500 md:px-[8rem] px-10 py-3 flex justify-between items-center md:border-b-6 border-b-4 border-secondary fixed top-0 left-0 z-[1000]">
      <Link href="/">
        <img
          src="/media/logoGrande.png"
          alt="logo"
          className="md:w-[200px] w-[170px]"
        />
      </Link>
      <Desktop state={state}></Desktop>
      <Mobile state={state}></Mobile>
    </header>
  );
};

export default Header;
