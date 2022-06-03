import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store';
import './login.scss';

export default function login() {
  const [username, setUsername] = useState('');
  const socket = useStore((state) => state.socket);

  return (
    <div className="container login">
      <div className="row">
        <h1> Your name, darling? </h1>
      </div>

      <br />
      <br />

      <div className="row">
        <div className="col">
          <input
            value={username}
            type="text"
            placeholder="call me.."
            onChange={(e) => {
              if (username.length <= 10) {
                setUsername(e.target.value);
                return;
              }
              alert('Shorter name, please.');
              setUsername('');
            }}
          />
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col">
          <Link to="/chat">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                if (username === '') {
                  socket.emit('make-name', socket.id);
                  return;
                }
                socket.emit('make-name', username);
              }}
            >
              🗣 ... 👤
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
}
