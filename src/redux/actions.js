export const ARR_NAV = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: 'ARR_NAV',
      payload: payload
    });
  } catch (error) {
    console.error(error);
  }
};
