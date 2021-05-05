import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const class1 = 'nav-item';
  return (
    <>
      <div className="d-flex justify-content-between">
        <ul className="d-none d-md-block m-4">
          <h1 className="text-dark font-weight-bold">Mathemagician</h1>
        </ul>
        <ul className="nav m-4">
          <li className={class1}>
            <Link to="/" className="nav-link active text-dark font-weight-bold">Home</Link>
          </li>
          <li className={class1}>
            <Link to="/calculator" className="nav-link text-dark font-weight-bolder">Calculator</Link>
          </li>
          <li className={class1}>
            <Link to="/quotes" className="nav-link text-dark font-weight-bold">Quotes</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
