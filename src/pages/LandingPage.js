import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Main from '../components/Main';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const darkMode = useSelector((state) => state.modeReducer.darkMode);

  useEffect(() => {
    if (darkMode) {
      const body = document.querySelector('body');
      body.style.backgroundColor = '#132750';
      body.style.transition = 'background-color 0.4s ease-in-out';
    } else {
      const body = document.querySelector('body');
      body.style.backgroundColor = '#F1F1F1';
    }
  }, [darkMode]);

  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
};

export default LandingPage;
