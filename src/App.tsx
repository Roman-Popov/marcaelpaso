import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + 'logo512.png'} className="App-logo" alt="logo" />
        <p>
          Marca el Paso <br /> Студия танцев
        </p>
      </header>
    </div>
  );
}

export default App;
