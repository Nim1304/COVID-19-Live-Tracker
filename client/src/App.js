import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Data from './component/dataCOVID.component';
import MenuBar from './component/menuBar.component';

function App() {
  return (
    <Router>
      <div id="container">
        <div id="menu">
          <MenuBar />
        </div>
        <Route path="/" exact component={(props) => <Data yesterday={false} />} />
        <Route path="/yesterday" component={(props) => <Data yesterday={true} />} />
      </div>
    </Router>
  );
}

export default App;
