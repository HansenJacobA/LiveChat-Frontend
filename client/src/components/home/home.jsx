import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

export default function home() {
  return (
    <div className="container-home">

      <div className="row">
        <h1> Welcome to RPS! 🗣 👤 </h1>
      </div>

      <br />

      <div className="row">
        <Link to="/login">
          <button type="button" className="btn-sml btn-dark"> Login </button>
        </Link>
      </div>

      <br />

      <div className="row">
        <Link to="/#">
          <button type="button" className="btn-sml btn-dark"> Guest </button>
        </Link>
      </div>
    </div>
  );
}
