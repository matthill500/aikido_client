import './App.css';

import {withRouter, Switch, Route} from "react-router-dom";

import Sidebar from './Sidebar.js';
import BottomNavigation from './BottomNav.js'

function App() {
  return (
    <div className="App">
     <Sidebar />
     <BottomNavigation />
    </div>
  );
}

export default withRouter(App);
