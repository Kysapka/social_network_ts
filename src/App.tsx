import React from 'react';
import './App.css';
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import { ProfilePageType, ProfileReducerActionTypes } from './redux/ProfileReducer';
import { AppStateType } from './redux/rootStore';
import { DialogsReducerActionTypes } from './redux/DialogsReducer';

type AppPropsType = {
    state: AppStateType
    dispatch: (action: ProfileReducerActionTypes | DialogsReducerActionTypes) => void
}

function App(props: AppPropsType) {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                </div>
            </div>

    )
}

export default App;
