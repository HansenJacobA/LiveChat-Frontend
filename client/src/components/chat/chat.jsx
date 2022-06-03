import React, { useRef, useState, useEffect } from 'react';
import './chat.scss';
import Form from './form';
import useStore from '../store';

export default function chat() {
  const [messages, setMessages] = useState([]);
  const scrollToBottom = useStore((state) => state.scrollToBottom);
  const socket = useStore((state) => state.socket);
  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight <= scrollHeight - 25) {
        document.getElementById('scrollToBottom-btn').style.display = 'block';
      } else {
        document.getElementById('scrollToBottom-btn').style.display = 'none';
      }
    }
  };

  socket.on('stored-messages', (storedMessages) => {
    setMessages(storedMessages);
    scrollToBottom();
  });

  useEffect(() => {
    socket.emit('upload-messages');
  }, []);

  return (
    <div className="container-chat mw-100">

      <div className="row">
        <div className="col">
          <h1> 🐸 Share some 🫖 </h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div
            className="container-messages"
            onScroll={onScroll}
            ref={listInnerRef}
          >

            {messages.map((obj, i) => {
              if (i >= messages.length - 1) {
                return (
                  <div className="row msg" id="last-msg" key={JSON.stringify(obj + i)}>
                    <div className="col-3">{obj.name}</div>
                    <div className="col-9">{obj.message}</div>
                  </div>
                );
              }
              return (
                <div className="row msg" key={JSON.stringify(obj + i)}>
                  <div className="col-3">{obj.name}</div>
                  <div className="col-9">{obj.message}</div>
                </div>
              );
            })}

          </div>
        </div>
      </div>

      <button
        type="button"
        className="btn-sml scrollToBottom-btn"
        onClick={() => { scrollToBottom(); }}
        id="scrollToBottom-btn"
      >
        Scroll to bottom
      </button>

      <br />

      <div className="row">
        <div className="col">
          <Form socket={socket} />
        </div>
      </div>
    </div>
  );
}
