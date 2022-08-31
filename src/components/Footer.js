import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img
          src="https://i.postimg.cc/PfF0sM5x/White.png"
          alt="mcontigo-logo"
        />
      </div>
      <div className="footer__title">
        <p>La mente es Maravillosa es una propiedad del Grupo MContigo</p>
      </div>
      <div className="footer__rights">
        <p>&copy; 2012 - 2020. All rights reserved.</p>
      </div>
      <div className="footer__text">
        <p>
          Los contenidos de esta publicidad se redactan solo con fines
          informativos. En ningún momento pueden servir para facilitar
          diagnósticos o sustituir la labor de un profesional. Le recomendamos
          que contacte con su especialista de confianza.
        </p>
      </div>
      <div className="footer__separator"></div>
      <div className="footer__polities">
        <ul>
          <li>Política de Cookies</li>
          <li>Política de Privacidad</li>
          <li>Términos y condiciones de uso</li>
          <li>Cláusula informativa de Consentimiento</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
