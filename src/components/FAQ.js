import React, { useState } from 'react';

const FAQ = ({ question, answer, dark }) => {
  const [open, setOpen] = useState(false);

  const handleFAQ = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className={open ? 'faq active-faq' : 'faq'} onClick={handleFAQ}>
      <div className="faq__question">
        <h4 id={dark ? 'dark__mode--textwhite' : ''}>{question}</h4>

        <svg className="svg" width="15" height="10" viewBox="0 0 42 25">
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            stoke-width="7"
            stoke-linecap="round"
          />
        </svg>
      </div>

      <div className="faq__answer">
        <p id={dark ? 'dark__mode--textwhite' : ''}>{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
