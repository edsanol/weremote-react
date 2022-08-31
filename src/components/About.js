import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  const dark = useSelector((state) => state.modeReducer.darkMode);

  return (
    <section className="main__about" id={dark ? 'dark__mode--themedark' : ''}>
      <div className="main__about-container">
        <h2 id={dark ? 'dark__mode--text' : ''}>ACERCA DE</h2>

        <div className="about__text">
          <p id={dark ? 'dark__mode--textwhite' : ''}>
            La primera idea o estrategia para ayudar a los niños a ser
            responsables es asignarles tareas sencillas. Para que la situación
            sea más fácil, puede ser conveniente que un adulto también las haga.
            Por ejemplo, ayudar a lavar los platos o hacer la colada con alguno
            de los progenitores es una buena manera de empezar. Será el primer
            paso para que adquieran autonomía: ser sus modelos. Pueden recoger
            los platos mientras uno de los progenitores los empieza a lavar.
          </p>
        </div>
      </div>

      <div className="about__image"></div>
    </section>
  );
};

export default About;
