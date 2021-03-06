export const OPEN_MODAL = 'modal/open';
export const CLOSE_MODAL = 'modal/close';

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
