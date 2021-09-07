import React from 'react';
import './App.css';
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import { ProfilePageType, ProfileReducerActionTypes } from './redux/ProfileReducer';
import { AppStateType, StoreType } from './redux/rootStore';
import { DialogsReducerActionTypes } from './redux/DialogsReducer';

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/profile" render={() => <Profile store={props.store} />}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs state={props.store.getState().dialogsPage} dispatch={props.store.dispatch}/>}/>
                </div>
            </div>

    )
}

export default App;
