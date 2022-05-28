import React, { useState, useEffect } from 'react';
import useStore from '../store';

export default function form() {
  const addMessage = useStore((state) => state.addMessage);
  const scrollToBottom = useStore((state) => state.scrollToBottom);
  const [message, setMessage] = useState('');

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  return (
    <div className="container">

      <div className="row">

        <div className="col-10">
          <input
            className="w-100"
            value={message}
            type="text"
            placeholder="message"
            onChange={(e) => { setMessage(e.target.value); }}
          />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn-sml btn-dark"
            onClick={() => {
              if (message !== '') {
                addMessage(message);
                setMessage('');
              }
            }}
          >
            submit
          </button>

        </div>
      </div>
    </div>
  );
}
