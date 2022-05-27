import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.scss';

export default function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // axios.post('/login', { username, password })
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-login">
      <div className="row">
        <h1> Enter your username and password! 🫣 </h1>
      </div>

      <br />
      <br />

      <div className="row">
        <div className="col">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => { setUsername(e.target.value); }}
          />
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col">
          <input
            type="text"
            placeholder="password"
            onChange={(e) => { setPassword(e.target.value); }}
          />
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col">
          <Link to="/chat">
            <button type="button" className="btn-sml btn-dark">Sign In</button>
          </Link>
        </div>
      </div>

    </div>
  );
}
