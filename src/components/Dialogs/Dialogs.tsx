import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {ActionTypes, dialogsDataType, messageDataType, stateType} from '../../redux/store'
import {sendNewMessageAC, updateNewMessageBodyAC} from '../../redux/DialogsReducer'


type DialogsPropsType = {
    state: stateType
    dispatch: (action: ActionTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.state.dialogsPage

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
            <textarea value={state.newMessageBody} onChange={onChangeHandler}
                      placeholder={'Enter your message'}></textarea>
            <button onClick={() => props.dispatch(sendNewMessageAC())}>Send message</button>
        </div>
    )
}