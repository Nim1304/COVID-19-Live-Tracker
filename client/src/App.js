import React from 'react';
import './App.css';

import Data from './component/dataCOVID.component';
import MenuBar from './component/menuBar.component';

function App() {
  return (
    <div>
      <div id="menu">
        <MenuBar />
      </div>
      <Data />
    </div>
  );
}

export default App;
