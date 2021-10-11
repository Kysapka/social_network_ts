import { createStore, combineReducers, applyMiddleware } from 'redux'
import { DialogsReducer } from './DialogsReducer'
import { ProfileReducer } from './ProfileReducer'
import { UsersReducer } from './UsersReducer'
import {AuthReducer} from "./AuthReducer";
import thunk from "redux-thunk";



const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage : UsersReducer,
    auth: AuthReducer
})


export type AppStateType = ReturnType<typeof rootReducer>


// Creatre Redux STORE
let rootStore = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = rootStore

 export default rootStore;



