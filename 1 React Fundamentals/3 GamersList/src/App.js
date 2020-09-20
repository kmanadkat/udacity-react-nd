import React, { Fragment } from 'react';
import MainWrapper from './MainWrapper'
import './app.css'
import logo from './logo.svg';

function App() {
  return (
    <Fragment>
      <header className="jumbotron mb-0 d-flex align-items-center justify-content-center bg-darker rounded-0">
        <h2 className="text-white">React - ND Gamers List</h2>
        <img className="App-logo mx-3" height="100" src={logo} alt=""/>
      </header>
      <MainWrapper />
    </Fragment>
  );
}

export default App;