import React from 'react'
import s from './OneMessage.module.css'

type OneMessagePropsType = {
    id: string
    avatar: string
    message: string
    isYou: boolean
}

export function OneMessage( props: OneMessagePropsType ) {
    return (
        <div className={`${s.wrapper} ${props.isYou ? s.me : null}`}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="avatar" className={s.photo}/>
            </div>
            <div className={s.message}>
                <p className={s.text}>{props.message}</p>
            </div>
        </div>
    )
}