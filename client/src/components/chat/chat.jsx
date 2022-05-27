import React from 'react';
import { Link } from 'react-router-dom';
import './chat.scss';
import Form from './form';

export default function chat() {
  return (
    <div className="container-chat">

      <div className="row">
        <div className="col-10">
          <h1> You are in the chat room! 👀 </h1>
        </div>
        <div className="col-2">
          <Link to="/">
            <button type="button" className="btn-sml btn-dark"> Home </button>
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="container-messages"> </div>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col">
          <Form />
        </div>
      </div>
    </div>
  );
}
