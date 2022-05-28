import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './lobby.scss';

export default function lobby() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  useEffect(() => {
    // axios.post('/login', { username, password })
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-lobby">

      <div className="row">
        <h1> You are in the lobby Dobby 👽 </h1>
      </div>

      <br />

      <div className="row">
        <div className="col current-players">
          <h5> Current Players </h5>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col">
          <Link to="/chat">
            <button type="button" className="btn-sml btn-dark"> Chat </button>
          </Link>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col">
          <Link to="/play">
            <button type="button" className="btn-sml btn-dark"> Play RPS </button>
          </Link>
        </div>
      </div>

    </div>
  );
}
