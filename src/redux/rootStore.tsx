import React from 'react'
import { createStore, combineReducers } from 'redux'
import { DialogsReducer } from './DialogsReducer'
import { ProfileReducer } from './ProfileReducer'



const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
})

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

let rootStore = createStore(rootReducer)

 export default rootStore;



