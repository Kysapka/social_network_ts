import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'

import {DialogsReducerActionTypes, DialogsPageType, sendNewMessageAC, updateNewMessageBodyAC} from '../../redux/DialogsReducer'
import {Button, TextField } from '@material-ui/core'


type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: DialogsReducerActionTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.state

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages
        .map(m => <Message id={m.id} message={m.message}/>)

    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <TextField color={"primary"}  value={state.newMessageBody} onChange={onChangeHandler}
                      placeholder={'Enter your message'} />
            <Button onClick={() => props.dispatch(sendNewMessageAC())}>Send message</Button>
        </div>
    )
}