import React from 'react'
import { createStore, combineReducers } from 'redux'
import { DialogsReducer } from './DialogsReducer'
import { ProfileReducer } from './ProfileReducer'



const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
})


export type StoreType = typeof rootStore
export type AppStateType = ReturnType<typeof rootReducer>

// Creatre Redux STORE
let rootStore = createStore(rootReducer)



 export default rootStore;



