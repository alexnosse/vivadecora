import React, { useState } from "react";

import { Provider } from "react-redux";

import configureStore from "./store/store";

import "./assets/scss/main.scss";
import Home from "./ui/pages/home/home.page";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
