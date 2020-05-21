import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import {store,persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import MainApp from "./components/MainApp"



function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
}

export default App;
