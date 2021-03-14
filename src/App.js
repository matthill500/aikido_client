import './App.css';

import {withRouter, Switch, Route} from "react-router-dom";

import Sidebar from './Sidebar.js';
import BottomNavigation from './BottomNav.js'
import theme from "./theme";

import { MuiThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <div className="App">
    <MuiThemeProvider theme={theme}>

     <Sidebar />
     <BottomNavigation />
     </MuiThemeProvider>
    </div>
  );
}

export default withRouter(App);
