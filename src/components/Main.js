import React from 'react';
import About from './About';
import Cards from './Cards';
import Contact from './Contact';
import FrecuentlyQuestions from './FrecuentlyQuestions';
import Modal from './Modal';
import Testimonials from './Testimonials';

const Main = () => {
  return (
    <main className="main">
      <Cards />
      <About />
      <Modal />
      <Testimonials />
      <FrecuentlyQuestions />
      <Contact />
    </main>
  );
};

export default Main;
