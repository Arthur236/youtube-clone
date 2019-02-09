export default ({ initialState, actionName }) => ((state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${actionName}_PENDING`:
      return {
        ...state,
        loading: true,
      };

    case `${actionName}_FULFILLED`:
      return {
        ...state,
        loading: false,
        success: true,
        payload: payload.data,
      };

    case `${actionName}_REJECTED`:
      return {
        ...state,
        loading: false,
        success: false,
        errors: payload.response,
      };

    default:
      return state;
  }
});
