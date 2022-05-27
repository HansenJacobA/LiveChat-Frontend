import React, { useState, useEffect } from 'react';

export default function form() {
  const [message, setmessage] = useState('');

  // useEffect(() => {
  //   console.log('message ', message);
  // }, []);

  return (
    <div className="container">

      <div className="row">

        <div className="col-10">
          <input
            type="text"
            placeholder="message"
            onChange={(e) => { setmessage(e.target.value); }}
          />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn-sml btn-dark"
            onClick={() => { console.log(message); }}
          >
            submit
          </button>

        </div>
      </div>
    </div>
  );
}
