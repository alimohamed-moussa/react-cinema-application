import React from 'react';
import { Provider } from 'react-redux';
import Header from '../src/components/header/Header';
import './App.scss';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="App">Redux</div>
    </Provider>
  );
};

export default App;
