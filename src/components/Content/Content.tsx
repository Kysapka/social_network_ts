import React from 'react'
import Posts from './Posts/Posts';
import {Redirect, Route, Switch} from 'react-router-dom';
import MessagesContainer from "./Dialogs/Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import Profile from "./Profile/Profile";
import {Login} from "./Login/Login";
import {NotFound404} from "./NotFound404/NotFound404";
import {useSelector} from "react-redux";
import {AppStateTypes} from "../../redux/store";

export function Content() {
    const isAuth = useSelector<AppStateTypes, boolean>(state => state.auth.isAuth)
    const myID = useSelector<AppStateTypes, number>(state => state.auth.id)
    return (
        <div className={'centralContent'}>
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={isAuth ? `/profile/${myID}` : '/login'}/>}/>
                <Route path={'/posts'} render={() => <Posts/>}/>
                <Route path={'/messages/:dialogID?'} render={() => <MessagesContainer/>}/>
                <Route path={'/profile/:userID?'} render={() => <Profile/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/404'} render={() => <NotFound404/>}/>
                <Route path='*' exact={true} component={NotFound404} />
            </Switch>
        </div>
    )
}