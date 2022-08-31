const initialState = {
  isOpen: false,
  title: '',
  text: '',
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isOpen: true,
        title: action.payload.modalTitle,
        text: action.payload.modalText,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false,
        title: '',
        text: '',
      };
    default:
      return state;
  }
};
