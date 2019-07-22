import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';


function App() {
  return (
    <Router>
       <Route path="/" exact component={Screen1} />
        <Route path="/make" component={Screen2} />
        <Route path="/car" component={Screen3} />
    </Router>
  );
}

export default App;
