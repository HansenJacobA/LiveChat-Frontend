import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './play.scss';

export default function play() {
  const [choice, setChoice] = useState('');

  useEffect(() => {
    // axios.post('/play', { username, password })
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-play">
      <div className="row">
        <h1> Make your choice! 🤔 </h1>
      </div>

      <br />
      <br />

      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn-sml btn-dark"
            onClick={() => { setChoice('Rock'); }}
          >
            Rock
          </button>
        </div>

        <div className="col">
          <button
            type="button"
            className="btn-sml btn-dark"
            onClick={() => { setChoice('Paper'); }}
          >
            Paper
          </button>
        </div>

        <div className="col">
          <button
            type="button"
            className="btn-sml btn-dark"
            onClick={() => { setChoice('Scissors'); }}
          >
            Scissors
          </button>
        </div>
      </div>

    </div>
  );
}
