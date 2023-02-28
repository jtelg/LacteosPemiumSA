import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ARR_NAV } from '../../redux/actions';
const arr_nav = [
  { label: 'Inicio', route: '/' },
  { label: 'Empresa', route: '/empresa' },
  { label: 'Productos', route: '/productos' },
  { label: 'Novedades', route: '/novedades' },
  { label: 'Recetas', route: '/recetas' },
  { label: 'Contacto', route: '/contacto' }
];
const Session = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const APIdata = async () => {
      const arr = { data: arr_nav, index: '' };
      dispatch(ARR_NAV(arr));
    };
    APIdata();
  }, [dispatch]);

  return <div>{props.children}</div>;
};

export default Session;
