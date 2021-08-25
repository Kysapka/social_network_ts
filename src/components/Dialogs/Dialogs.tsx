import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { dialogsDataType, messageDataType } from '../../redux/store'





type DialogsPropsType = {
    state: {
        dialogs: dialogsDataType
        messages: messageDataType
    }

}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {



    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages
        .map(m => <Message id={m.id} message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems} >
                {dialogsElements}
             </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}