
//imports
import './App.css';

import React, { useEffect, useState, useReducer } from "react";

import {BrowserRouter as Router, withRouter, Switch, Route} from "react-router-dom";

import theme from "./theme";

import { MuiThemeProvider } from "@material-ui/core/styles";

import Home from './Home.js';
import Chart from './Chart.js';
import Sidebar from './Sidebar.js';
import BottomNavigation from './BottomNav.js';

import {initialState, reducer, CoinContext} from './CoinContext.js';

const axios = require('axios');

function App() {

  //hooks
  const [state, dispatch] = useReducer(reducer, initialState);

  const [EURUSD, setEURUSD] = useState([]);
  const [USDJPY, setUSDJPY] = useState([]);
  const [GBPUSD, setGPBUSD] = useState([]);
  const [USDCAD, setUSDCAD] = useState([]);
  const [USDSEK, setUSDSEK] = useState([]);
  const [USDCHF, setUSDCHF] = useState([]);


  //use effect hooks - similar to componentDidMount Etc.
  useEffect(function(){
    retrieveEURUSD();
    // retrieveUSDJPY();
    // retrieveGBPUSD();
    // retrieveUSDCAD();
    // retrieveUSDSEK();
    // retrieveUSDCHF();
  }, []);
  

  //API requests
  function retrieveEURUSD(){
    axios.get("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=RTRHQ8UIFIBH1R5X")
    .then(function(response){
      setEURUSD(response.data);
    });
  }

  function retrieveUSDJPY(){
    axios.get("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=JPY&apikey=RTRHQ8UIFIBH1R5X")
    .then(function(response){
      setUSDJPY(response.data);
    });
  }

  function retrieveGBPUSD(){
    axios.get("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=GBP&to_symbol=USD&apikey=RTRHQ8UIFIBH1R5X")
    .then(function(response){
      setGPBUSD(response.data);
    });
  }

  function retrieveUSDCAD(){
    axios.get("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=CAD&apikey=RTRHQ8UIFIBH1R5X")
    .then(function(response){
      setUSDCAD(response.data);
    });
  }

  function retrieveUSDSEK(){
    axios.get("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=SEK&apikey=RTRHQ8UIFIBH1R5X")
    .then(function(response){
      setUSDSEK(response.data);
    });
  }

  function retrieveUSDCHF(){
    axios.get("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=CHF&apikey=RTRHQ8UIFIBH1R5X")
    .then(function(response){
      setUSDCHF(response.data);
    });
  }

//using router to allow for routing
  return (
    <Router>
    <div className="App">
    <MuiThemeProvider theme={theme}>
      <CoinContext.Provider value={{state,dispatch}}>
      <Sidebar />

      <BottomNavigation />

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Chart">
            <Chart 
              eurusd={EURUSD}
              usdjpy={USDJPY}
              gbpusd={GBPUSD}
              usdcad={USDCAD}
              usdsek={USDSEK}
              usdchf={USDCHF}
            />
          </Route>
        </Switch>
        </CoinContext.Provider>
     </MuiThemeProvider>
    </div>
    </Router>
  );
}

export default withRouter(App);

export { CoinContext };
