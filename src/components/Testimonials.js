import React, { useEffect } from 'react';
import TestimonialMessage from './TestimonialMessage';
import { useSelector } from 'react-redux';

const testimonial = [
  {
    testimonial:
      'Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.',
    author: '~Ana Montesori~',
  },
  {
    testimonial:
      'Realmente he visto cambios muy positivos en mi día a día, es un sitio web 100% recomendado. Espero nos sigan nutriendo de contenido tan interesante.',
    author: '~Miriam Montesori~',
  },
  {
    testimonial:
      'Muchas gracias por compartir este gran contenido, realmente lo recomiendo y espero que les sea de gran provecho a muchas más mujeres.',
    author: '~Alejandra Montesori~',
  },
];

const Testimonials = () => {
  const dark = useSelector((state) => state.modeReducer.darkMode);

  useEffect(() => {
    const testimonialContainer = document.querySelector(
      '.testimonial__messages'
    );
    const testimonialPoint = document.querySelectorAll('.point');

    testimonialPoint.forEach((point, index) => {
      testimonialPoint[index].addEventListener('click', () => {
        let position = index;
        let operation = position * -33.33 + 33.33;

        testimonialContainer.style.transform = `translateX(${operation}%)`;

        testimonialPoint.forEach((point, index) => {
          testimonialPoint[index].classList.remove('active');
        });
        testimonialPoint[position].classList.add('active');
      });
    });
  }, []);

  return (
    <section className="main__testimonials">
      <h2 id={dark ? 'dark__mode--text' : ''}>TESTIMONIOS</h2>

      <div className="testimonials__container">
        <div className="testimonials__image">
          <img
            src="https://i.postimg.cc/4N5zgyDY/Vector.png"
            alt="quotation-marks"
          />
        </div>

        <div className="testimonial__messages">
          {testimonial.map((testimonial, index) => {
            return (
              <TestimonialMessage
                key={index}
                testimonial={testimonial.testimonial}
                author={testimonial.author}
                dark={dark}
              />
            );
          })}
        </div>
        <ul className="testimonials__points">
          <li className="point active"></li>
          <li className="point"></li>
          <li className="point"></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
