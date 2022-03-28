import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateContext';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
  <BrowserRouter>
    
      <App />
    
  </BrowserRouter>
  </StateProvider>,
  document.getElementById('root')
);

