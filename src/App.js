import React, { Component } from 'react';
import logo from './logo.svg';

import Dasboard from './Dashboard'
import Store from './Store'

function App() {
  return (
    <div className="App">
      <Store>
         <Dasboard />   
       </Store>
    </div>
  );
}

export default App;
