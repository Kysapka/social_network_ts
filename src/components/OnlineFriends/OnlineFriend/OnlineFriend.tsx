import React from 'react'
import s from './OnlineFriend.module.css'

type friendTypes = {
    name: string
    avatar: string
}

export default function OnlineFriend(props: friendTypes) {
    return (
        <div className={s.wrapper}>
            <a href="/#" className={s.link} ><img src={props.avatar} alt="my friend" className={s.avatar} /></a>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}