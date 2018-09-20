import React, { Component } from 'react';
import intl from 'react-intl-universal';

import logo from './logo.svg';
import './App.css';


const locales = {
  'pt-BR': require('./locales/pt-BR.json'),
  'en-US': require('./locales/en-US.json')
};

class App extends Component {

  constructor() {
    super();

    const currentLocale = locales[navigator.language] ? navigator.language : 'pt-BR';

    intl.init({
      currentLocale,
      locales
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{intl.get('header.title', { nome: 'Everton' })}</h1>
        </header>
        <p className="App-intro">
          {intl.getHTML('home.description', { arquivo: 'src/App.js' })}
        </p>
      </div>
    );
  }
}

export default App;
