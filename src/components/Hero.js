import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const imageUrl = [
    'https://res.cloudinary.com/dho6leigc/image/upload/v1661814793/photo_01_foytxb.png',
    'https://res.cloudinary.com/dho6leigc/image/upload/v1661815307/photo_02_mgddsa.png',
    'https://res.cloudinary.com/dho6leigc/image/upload/v1661815333/photo_03_x3qsvo.png',
    'https://res.cloudinary.com/dho6leigc/image/upload/v1661815352/photo_04_vhbxiu.png',
    'https://res.cloudinary.com/dho6leigc/image/upload/v1661815370/photo_05_rr6zsq.png',
  ];

  const hero = useRef(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      const scroll = window.scrollY;
      if (scroll < window.innerHeight - 100) {
        hero.current.style.backgroundImage = `url(${imageUrl[i]})`;
        i++;
        if (i === imageUrl.length) {
          i = 0;
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <section className="hero">
      <div className="hero--img" id="hero--img" ref={hero}>
        <div className="hero__text">
          <div className="hero__text__title">
            <h1>
              Su viaje de <span>salud emocional</span> empieza aqui
            </h1>
          </div>

          <div className="hero__text__subtitle">
            <h2>Conoce nuestros profesionales con licencia</h2>
          </div>

          <div className="hero__text__paragraph">
            <p>
              Todos se someten a un proceso seguro de verificación y
              acreditación, además de adherirse a estrictos códigos de ética y
              confidencialidad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
