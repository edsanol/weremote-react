export const actionOpenModal = (data) => {
  return {
    type: 'OPEN_MODAL',
    payload: data,
  };
};

export const actionCloseModal = () => {
  return {
    type: 'CLOSE_MODAL',
  };
};
