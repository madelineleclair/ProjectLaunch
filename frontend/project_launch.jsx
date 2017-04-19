import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser){
    const preloadedState = { session: {currentUser: window.currentUser } };
    store = configureStore();
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");

  window.store = store;
    ReactDOM.render(<Root store={ store }/>, root);
});
