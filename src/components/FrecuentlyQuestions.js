import React from 'react';
import FAQ from './FAQ';
import { useSelector } from 'react-redux';

const data = [
  {
    question: '¿Cuáles son los pasos para tomar una decisión?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    question: '¿Cuáles son las caracteristicas de un lider?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    question: '¿Como superar situaciones complicadas?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const FrecuentlyQuestions = () => {

  const dark = useSelector((state) => state.modeReducer.darkMode);

  return (
    <section className="main__faq">
      <h2 id={dark ? 'dark__mode--text' : ''}>PREGUNTAS FRECUENTES</h2>
      {
        data.map((item, index) => {
          return (
            <FAQ
              key={index}
              question={item.question}
              answer={item.answer}
              dark={dark}
            />
          );
        })
      }
    </section>
  );
};

export default FrecuentlyQuestions;
