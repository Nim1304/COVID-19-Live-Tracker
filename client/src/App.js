import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Data from './component/dataCOVID.component';
import MenuBar from './component/menuBar.component';

function App() {
  return (
    <div id="container">
      <div id="menu">
        <MenuBar />
      </div>
      <Route path="/" exact component={<Data yesterday={false} />} />
      <Route path="/yesterday" component={<Data yesterday={true} />} />
    </div>
  );
}

export default App;
