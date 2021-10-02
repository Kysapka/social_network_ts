import React from 'react'
import s from './../Dialogs.module.css'

type messagePropsType = {
    id: string
    message: string
}

export const Message = (props: messagePropsType) => {
   return <div className={s.message}>{props.message}</div>
}