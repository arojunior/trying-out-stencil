import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>My React app using Stencil web components:</h3>
      <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
    </div>
  );
}

export default App;
