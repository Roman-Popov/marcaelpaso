import React from 'react';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={`${process.env.PUBLIC_URL}logo512.png`} className="App-logo" alt="logo" />
      <p>
        Marca el Paso
        {' '}
        <br />
        {' '}
        Студия танцев
        <br />
        {process.env.REACT_APP_API_KEY}
      </p>
    </header>
  </div>
);

export default App;
