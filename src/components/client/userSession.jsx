import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ARR_NAV, PRODUCTOS, RECETAS, SESSION_SET } from '../../redux/actions';
import localStorage from '../../utils/localStorage';
import APIConsultas from '../../services/consultas';
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
  const sessionState = useSelector((s) => s.session);
  const sessionLocal = localStorage.getFromStorage('session');
  useEffect(() => {
    const APIdata = async () => {
      const resprod = await APIConsultas.producto.GET_SHOP('productos', 0);
      dispatch(PRODUCTOS(resprod));
      const resrecetas = await APIConsultas.producto.GET_SHOP('recetas', 0);
      dispatch(RECETAS(resrecetas));
      if (sessionLocal && !sessionState) dispatch(SESSION_SET(sessionLocal));
      // APIConsultas.usuario.GlobalInfoUser(dispatch, true);
      if (sessionState?.role === 'Admin') {
        if (!arr_nav.find((e) => e.label === 'Tablero')) {
          arr_nav.push({
            label: 'Tablero',
            route: '/admin',
            icon: 'dashboard'
          });
        }
      } else {
        if (arr_nav.find((e) => e.label === 'Tablero')) {
          arr_nav.pop();
        }
      }
      const arr = { data: arr_nav, index: '' };
      dispatch(ARR_NAV(arr));
    };
    APIdata();
  }, [dispatch]);

  return <div>{props.children}</div>;
};

export default Session;
