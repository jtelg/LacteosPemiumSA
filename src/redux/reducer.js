import localStorage from '../utils/localStorage';

const initialState = {};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ARR_NAV':
      return {
        ...state,
        arr_nav: payload
      };
    case 'PRODUCTOS':
      return {
        ...state,
        productos: payload
      };
    case 'RECETAS':
      return {
        ...state,
        recetas: payload
      };
    case 'SESSION_SET':
      localStorage.setToStorage('session', payload);
      return {
        ...state,
        session: payload
      };
    default:
      return state;
  }
};

export default Reducer;
