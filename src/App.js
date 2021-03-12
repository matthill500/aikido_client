import './App.css';

import {withRouter, Switch, Route} from "react-router-dom";

import Sidebar from './Sidebar.js';

function App() {
  return (
    <div className="App">
     <Sidebar />
    </div>
  );
}

export default withRouter(App);
