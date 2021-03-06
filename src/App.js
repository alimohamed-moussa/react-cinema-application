import React from 'react';
import { Provider } from 'react-redux';
import Header from '../src/components/header/Header';
import Main from './components/main/Main';
import './App.scss';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />

      <div className="App">
        <Main />
      </div>
    </Provider>
  );
};

export default App;
