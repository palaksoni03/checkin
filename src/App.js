import React from 'react';
import Header from './core/component/header';

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <Header />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

    </div>
  );
}

export default App;
