import React from 'react';
import Nav from './Nav';

const Quote = () => {
  const quote = 'Famous Quotes';
  return (
    <>
      <Nav />
      <h1 className="w-25 mx-auto">{quote}</h1>
      <div className="row wide">
        <div className="col-3 m-3 pl-5">
          <p>Give me a place to stand, and I will move the earth</p>
          <p className="text-secondary font-weight-light">Archimedes</p>
        </div>
        <div className="col-3 m-3">
          <p>
            If I have been able to see further, it was only because I
            stood on the shoulders of giants.
          </p>
          <p className="text-secondary font-weight-light">Isaac Newton</p>
        </div>
        <div className="col-3 m-3">
          <p>Mathematics is the queen of science, and arithmetic the queen of mathematics</p>
          <p className="text-secondary font-weight-light">Carl Friedrich Gauss</p>
        </div>
      </div>
    </>
  );
};

export default Quote;
