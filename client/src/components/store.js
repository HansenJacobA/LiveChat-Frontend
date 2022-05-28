import create from 'zustand';

const useStore = create((set) => ({
  messages: [],
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  scrollToBottom: () => {
    const element = document.getElementById('last-msg');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  },
}));

export default useStore;
