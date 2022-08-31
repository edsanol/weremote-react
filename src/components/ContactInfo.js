import React from 'react';
import { useSelector } from 'react-redux';

const ContactInfo = ({ image, alt, text }) => {
  const dark = useSelector((state) => state.modeReducer.darkMode);

  return (
    <div className="contact__info__field">
      <i id={dark ? 'dark__mode--textwhite' : ''} className={image}></i>
      <p id={dark ? 'dark__mode--textwhite' : ''}>{text}</p>
    </div>
  );
};

export default ContactInfo;
