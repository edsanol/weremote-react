import React from 'react';
import { useDispatch } from 'react-redux';
import { actionOpenModal } from '../store/actions/actionModal';

const Card = ({ title, category, image, modalTitle, modalText, dark }) => {
  const dispatch = useDispatch();

  const handleClickModal = (e) => {
    e.preventDefault();
    dispatch(actionOpenModal({ modalTitle, modalText }));
  };

  return (
    <div
      className="card"
      id={dark ? 'dark__mode--theme' : ''}
      onClick={handleClickModal}>
      <div className="card__image">
        <img src={image} alt="card" />
      </div>

      <div className="card__category">
        <p>{category}</p>
      </div>

      <div className="card__title">
        <h3 id={dark ? 'dark__mode--textwhite' : ''}>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
