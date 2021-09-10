import React from 'react'
import { createStore, combineReducers } from 'redux'
import { DialogsReducer } from './DialogsReducer'
import { ProfileReducer } from './ProfileReducer'
import { UsersReducer } from './UsersReducer'



const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage : UsersReducer
})


export type AppStateType = ReturnType<typeof rootReducer>


// Creatre Redux STORE
let rootStore = createStore(rootReducer)



 export default rootStore;



