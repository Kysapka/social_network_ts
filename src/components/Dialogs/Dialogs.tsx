import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

type dialogItemPropsType = {
    id: string
    name: string
}

const DialogItem = (props: dialogItemPropsType) => {
return <div className={`${s.dialog} ${s.active}`}>
    <NavLink to={"/profile" + props.id}>{props.name}</NavLink>
</div>
}

type messagePropsType = {
    message: string
}

const Message = (props: messagePropsType) => {
   return <div className={s.message}>{props.message}</div>
}

type propsType = {}

export const Dialogs: React.FC<propsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name="Dimych"/>
                <DialogItem id="2" name="Andrew"/>
                <DialogItem id="3" name="Sveta"/>
                <DialogItem id="4" name="Sasha"/>
                <DialogItem id="5" name="Victor"/>
                <DialogItem id="6" name="Valera"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How is your it-kamasutra?" />
                <Message message="Yo" />
                <Message message="Yo" />
                <Message message="Yo" />
            </div>
        </div>
    )
}