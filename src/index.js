import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/index';
import { createStore, compose, applyMiddleware } from 'redux';

import { Provider } from 'react-redux'
import  thunk  from 'redux-thunk';

const logger = (store)=>{
      return (dispatch)=>{
        return (action)=>{
                console.log("...in Middleware...");
                // const returnValue = next(action);
                // return returnValue;
        }
     }
}
var middleware = [thunk ];
var intialstate={};

const store = createStore(reducer,
                     intialstate,
                     compose( 
                         applyMiddleware( ...middleware ),

));

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
