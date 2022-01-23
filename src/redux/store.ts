import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer from "./PostsReducer";
import dialogsReducer from "./DialogsReducer";
import rightSidebar from "./RightSidebar";
import usersReducer, {setFollowWorkSaga, setUnFollowWorkSaga, UsersRootActionsType} from "./UsersReducer";
import profileReducer, {DialogsActionsRootType} from "./ProfileReducer";
import authReducer from "./auth/authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import statusReducer, {StatusRootActionsType} from "./StatusReducer";
import {AuthRootActionsType} from "./auth/authTypes";
import createSagaMiddleware from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'

export type AppStateTypes = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    rightSidebar: rightSidebar,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    status: statusReducer,
})



const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, sagaMiddleware))

sagaMiddleware.run(rootSagaWatcher)

function* rootSagaWatcher() {
    yield takeEvery('setFollowFromSaga', setFollowWorkSaga)
    yield takeEvery('setUnFollowFromSaga', setUnFollowWorkSaga)
}


export type AppActionsType = UsersRootActionsType
    | DialogsActionsRootType | AuthRootActionsType | StatusRootActionsType
export type RootThunkType = ThunkAction<void, AppStateTypes, unknown, AppActionsType>//Promise <-> void


//@ts-ignore
window.store = store

export default store