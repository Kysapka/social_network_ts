import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer from "./PostsReducer";
import dialogsReducer from "./DialogsReducer";
import rightSidebar from "./RightSidebar";
import usersReducer, {UsersRootActionsType} from "./UsersReducer";
import profileReducer, {DialogsActionsRootType} from "./ProfileReducer";
import authReducer from "./auth/authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import statusReducer, {StatusRootActionsType} from "./StatusReducer";
import {AuthRootActionsType} from "./auth/authTypes";

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

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export type AppActionsType = UsersRootActionsType
    | DialogsActionsRootType | AuthRootActionsType | StatusRootActionsType
export type RootThunkType = ThunkAction<void, AppStateTypes, unknown, AppActionsType>//Promise <-> void


//@ts-ignore
window.store = store

export default store