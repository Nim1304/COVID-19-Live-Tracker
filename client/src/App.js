import React from 'react';
import './App.css';

import Data from './component/dataCOVID.component';
import MenuBar from './component/menuBar.component';

function App() {
  return (
    <div id="container">
      <div id="menu">
        <MenuBar />
      </div>
      <Data />
    </div>
  );
}

export default App;
