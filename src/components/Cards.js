import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';

const data = [
  {
    title: 'Debilidad: Cuando siento que las energias no son suficientes',
    category: 'Nutrición',
    image: 'https://i.postimg.cc/nLkS8XSh/card-mobile.jpg',
    modalTitle: 'Aprende más sobre la debilidad',
    modalText:
      'Es la reducción de la fuerza en uno o más músculos. puede ser generalizada o solo en una zona del cuerpo. Es más notoria cuando es en una zona.',
  },
  {
    title: 'Colapso mental: Cuando siento el peso de mundo sobre mí',
    category: 'Salud Mental',
    image: 'https://i.postimg.cc/nLkS8XSh/card-mobile.jpg',
    modalTitle: 'Aprende más sobre el colapso mental',
    modalText:
      'Crisis nerviosa, colapso mental o hundimiento mental es un nombre no usado médicamente para describir un ataque de enfermedad mental repentino y agudo como depresión o ansiedad.',
  },
  {
    title: 'Aburrimiento: Cuando siento que no hay mas escalones',
    category: 'Rutina',
    image: 'https://i.postimg.cc/nLkS8XSh/card-mobile.jpg',
    modalTitle: 'Aprende más sobre el aburrimiento',
    modalText:
      'El aburrimiento es un estado de ánimo que se manifiesta por una falta de energía y de concentración.',
  },
];

const Cards = () => {
  const dark = useSelector((state) => state.modeReducer.darkMode);

  return (
    <article className="main__cards">
      <h2 id={dark ? 'dark__mode--text' : ''}>ÚLTIMOS ARTÍCULOS</h2>
      <section className="main__section-cards">
        {data.map((item, index) => (
          <Card key={index} {...item} dark={dark} />
        ))}
      </section>
    </article>
  );
};

export default Cards;
