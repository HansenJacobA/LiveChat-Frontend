import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/home/home';
import Login from './components/login/login';
import Chat from './components/chat/chat';

export default function App() {
  return (
    <div className="container app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}
