import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './chat.scss';
import Form from './form';
import useStore from '../store';

export default function chat() {
  const messages = useStore((state) => state.messages);
  const scrollToBottom = useStore((state) => state.scrollToBottom);

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
          <div
            className="container-messages"
            onScroll={onScroll}
            ref={listInnerRef}
          >
            {messages.map((msg, i) => {
              if (i >= messages.length - 1) {
                return (
                  <div className="row msg" key={JSON.stringify(msg + i)}>
                    <div className="col-3"> name </div>
                    <div className="col-9" id="last-msg">{msg}</div>
                  </div>
                );
              }
              return (
                <div className="row msg" key={JSON.stringify(msg + i)}>
                  <div className="col-3"> name </div>
                  <div className="col-9">{msg}</div>
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
          <Form />
        </div>
      </div>
    </div>
  );
}
