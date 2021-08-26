import React from 'react';
import './App.css';
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import {ActionTypes, dialogsDataType, messageDataType, postsDataType, stateType} from './redux/store';



type propsType = {
    state: stateType
    dispatch: (action: ActionTypes) => void
}

function App(props: propsType) {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs state={props.state} dispatch={props.dispatch}/>}/>
                </div>
            </div>

    )
}

export default App;
