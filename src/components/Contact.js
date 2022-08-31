import React from 'react';
import ContactInfo from './ContactInfo';
import { useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';

const Contact = () => {
  const dark = useSelector((state) => state.modeReducer.darkMode);

  const [{ name, email, message }, handleInputChange, reset] = useForm({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    window.alert(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nGracias por escribirnos! Nos pondremos en contacto con usted tan pronto como sea posible.`
    );
    reset();
  };

  return (
    <section className="main__contact">
      <h2>CONTACTO</h2>

      <div className="contact">
        <div className="contact__container">
          <div className="contact__title">
            <h3>CONTACTANOS</h3>
          </div>

          <div className="contact__text">
            <p>
              Sientete libre de contactarnos cuando desees, estaremos en
              contacto contigo en cuanto podamos.
            </p>
          </div>

          <div className="contact__form">
            <form onSubmit={handleSubmitForm}>
              <div className="contact__form__name">
                <label htmlFor="name">Nombre</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  autoComplete="off"
                  onChange={handleInputChange}
                  value={name}
                />
              </div>

              <div className="contact__form__email">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder="Ingresa tu email"
                  autoComplete="off"
                  onChange={handleInputChange}
                  value={email}
                />
              </div>

              <div className="contact__form__message">
                <label htmlFor="message">Deja tu mensaje</label>
                <textarea
                  name="message"
                  id=""
                  cols="20"
                  rows="10"
                  placeholder="Deja tu mensaje"
                  onChange={handleInputChange}
                  value={message}></textarea>
              </div>

              <div className="contact__form__button">
                <button className="button" type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="contact__info" id={dark ? 'dark__mode--theme' : ''}>
          <div className="contact__info__title">
            <h3 id={dark ? 'dark__mode--text' : ''}>INFO</h3>
          </div>

          <ContactInfo
            image={'fa-solid fa-envelope'}
            alt={'letter-icon'}
            text={'info@mejorconsalud.com'}
          />
          <ContactInfo
            image={'fa-solid fa-phone'}
            alt={'phone-icon'}
            text={'+1 12 34 5678'}
          />
          <ContactInfo
            image={'fa-solid fa-location-dot'}
            alt={'address-icon'}
            text={'14 Green Road st.'}
          />
          <ContactInfo
            image={'fa-solid fa-clock'}
            alt={'clock-icon'}
            text={'9: 00 - 18: 00'}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
