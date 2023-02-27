const initialState = {};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ARR_NAV':
      return {
        ...state,
        arr_nav: payload
      };
    default:
      return state;
  }
};

export default Reducer;
