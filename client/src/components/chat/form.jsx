import React, { useState } from 'react';

export default function form({ socket }) {
  const [message, setMessage] = useState('');

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (message !== '') {
        socket.emit('send-message', message);
        setMessage('');
      }
    }
  };

  return (
    <div className="container">

      <div className="row">
        <div className="col">
          <input
            className="col-9"
            value={message}
            type="text"
            placeholder="message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyPress={onKeyPress}
          />
          <button
            type="button"
            className="btn-sml btn-dark col-3"
            onClick={() => {
              if (message !== '') {
                socket.emit('send-message', message);
                setMessage('');
              }
            }}
          >
            share
          </button>
        </div>
      </div>

      <br />
    </div>
  );
}
