import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'

type messagePropsType = {
    id: string
    message: string
}

export const Message = (props: messagePropsType) => {
   return <div className={s.message}>{props.message}</div>
}