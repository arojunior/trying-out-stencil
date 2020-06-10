import React from 'react';
import './App.css';

const App = () => {

  const onClickButton = () => {
    alert('Clicked!')
  }

  return (
    <div className="App">
      <h3>My React app using Stencil web components:</h3>
      <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
      <jr-button variant="primary" onClick={onClickButton}>Button</jr-button>
    </div>
  );
}

export default App;
