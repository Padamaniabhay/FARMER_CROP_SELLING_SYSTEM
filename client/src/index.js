import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"

import Store from "./Redux/Store"

//carousal
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
