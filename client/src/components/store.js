import create from 'zustand';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Client id: ', socket.id);
});

const useStore = create((set) => ({
  scrollToBottom: () => {
    const element = document.getElementById('last-msg');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  },
  socket,
}));

export default useStore;
