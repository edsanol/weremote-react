const initialState = {
  darkMode: false,
};

export const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DARK_MODE':
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};
