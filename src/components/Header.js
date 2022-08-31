import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionDarkMode } from '../store/actions/actionMode';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [headerClass, setHeaderClass] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const dark = useSelector((state) => state.modeReducer.darkMode);

  const dispatch = useDispatch();

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  });

  const handleClickOpenMenu = (e) => {
    e.preventDefault();
    setHeaderClass(!headerClass);
  };

  const handleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
    dispatch(actionDarkMode(!darkMode));
  };

  return (
    <header
      className={
        header && dark
          ? 'header header__active dark__mode--theme'
          : header
          ? 'header header__active'
          : 'header'
      }
      id="header">
      <div className="header__menu">
        <button className="header--button" onClick={handleClickOpenMenu}>
          <i
            className="fa-solid fa-bars"
            id={dark ? 'dark__mode--icons' : ''}></i>
        </button>
      </div>

      <div
        className={
          headerClass ? 'menu__active header__sidemenu' : 'header__sidemenu'
        }
        id="menu-show">
        <div className="header__sidemenu__button" id="menu-hide">
          <button
            className="header__sidemenu__button--button"
            onClick={handleClickOpenMenu}>
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
        <div className="header__sidemenu__title">
          <p>Embarazo</p>
        </div>
        <div className="header__sidemenu__elements">
          <ul>
            <li>
              Quiero ser mamá
              <i className="fa-solid fa-arrow-right-long"></i>
            </li>
            <li>
              Voy a ser mamá
              <i className="fa-solid fa-arrow-right-long"></i>
            </li>
            <li>
              Parto
              <i className="fa-solid fa-arrow-right-long"></i>
            </li>
          </ul>
        </div>
        <div className="header__sidemenu__title">
          <p>Educación</p>
        </div>
        <div className="header__sidemenu__elements">
          <ul>
            <li>
              Aprende a ser mamá
              <i className="fa-solid fa-arrow-right-long"></i>
            </li>
            <li>
              Educación para bebés
              <i className="fa-solid fa-arrow-right-long"></i>
            </li>
            <li>
              Educación para niños
              <i className="fa-solid fa-arrow-right-long"></i>
            </li>
          </ul>
        </div>
      </div>

      <div className="header__logo"></div>

      <div className="header__search">
        <button className="header--button" onClick={handleDarkMode}>
          {
            dark ? (
              <i
              className="fa-solid fa-sun"
              id={dark ? 'dark__mode--icons' : ''}></i>
            ) : (
              <i
              className="fa-solid fa-moon"
              id={dark ? 'dark__mode--icons' : ''}></i>
            )
          }
          
        </button>
      </div>
    </header>
  );
};

export default Header;
