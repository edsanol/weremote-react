import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCloseModal } from '../store/actions/actionModal';

const Modal = () => {
  const { isOpen, title, text } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();

  const handleClickCloseModal = (e) => {
    e.preventDefault();
    dispatch(actionCloseModal());
  };

  return (
    <section
      className={isOpen ? 'main__modal main__modal--show' : 'main__modal'}>
      <div className="modal__container">
        <div className="modal__close" onClick={handleClickCloseModal}>
          <i className="fa-solid fa-x"></i>
        </div>
        <div className="modal__content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default Modal;
