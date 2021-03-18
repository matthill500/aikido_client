

import {createContext} from "react";
export const CoinContext = createContext();



//initial state
export const initialState = {
    btc: null,
    error: ""
};

//use reducer modifys state
export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_BTC": {    
            return {
                //get existing state and overide w/ spread operator
                ...state,
                btc: action.payload.btc,
                error: ""
            };
        }
        case "SET_ERROR": {    
          return {
              ...state,
              error: action.payload.error,
              btc: null,
          };
      }
        default: {
            return state;
        }
    }
};