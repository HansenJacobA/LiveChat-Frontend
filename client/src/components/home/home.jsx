import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import kermit from './kermit.gif';

export default function home() {
  return (
    <div className="container home">

      <div className="row">
        <h1> Share the ... </h1>
      </div>

      <br />

      <div className="row">
        <Link to="/login">
          <button type="button" className="btn btn-dark"> 🫖 </button>
        </Link>
      </div>

      <br />

      <div className="row">
        <img
          src={kermit}
          alt=""
        />
      </div>

    </div>
  );
}
