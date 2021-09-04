import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootStore from './redux/rootStore'

import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={rootStore.getState()} dispatch={rootStore.dispatch.bind(rootStore)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

rootStore.subscribe(rerenderEntireTree)


reportWebVitals();
