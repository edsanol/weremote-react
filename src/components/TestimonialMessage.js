import React from 'react';

const TestimonialMessage = ({ testimonial, author, dark }) => {
  return (
    <div className="testimonial__items">
      <div className="testimonials__text">
        <p id={dark ? 'dark__mode--textwhite' : ''}>{testimonial}</p>
      </div>

      <div className="testimonials__author">
        <p id={dark ? 'dark__mode--textwhite' : ''}>{author}</p>
      </div>
    </div>
  );
};

export default TestimonialMessage;
