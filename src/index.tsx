import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals();
