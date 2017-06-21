import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import allReducers from "./reducers/index";
import "./index.css";
import App from "./components/app";

const loggerMiddleware = createLogger();

function devToolsInstalled( ) {
    return typeof window === "object" && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function"; // eslint-disable-line no-underscore-dangle
}

const composeEnhancers = devToolsInstalled( ) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose; // eslint-disable-line no-underscore-dangle

const store = createStore( allReducers, composeEnhancers( applyMiddleware( thunkMiddleware, loggerMiddleware ) ) );
// const store = createStore( allReducers, applyMiddleware( thunkMiddleware ) );

ReactDOM.render(
    <Provider store={ store } >
        <App />
    </Provider>,
   document.getElementById( "root" ) );
