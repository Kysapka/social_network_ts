import React from 'react';
import './App.css';
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import {dialogsDataType, messageDataType, postsDataType} from './redux/store';



type propsType = {
    state: {
        profilePage: {
            posts: postsDataType,
            newPostText: string
        },
        dialogsPage: {
            dialogs: dialogsDataType
            messages: messageDataType
        }
    }
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function App(props: propsType) {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs state={props.state.dialogsPage} />}/>
                </div>
            </div>

    )
}

export default App;
