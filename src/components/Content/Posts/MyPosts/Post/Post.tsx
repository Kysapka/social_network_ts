import React from 'react'
import s from './Post.module.css'

export type PostPropsType = {
    post: string
    likesCount: number
}

export function Post(props: any) {
    return (
        <div className={s.wrapper}>
            <div className={s.top}>
                <div className={s.avatar}><img src={'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar9.jpg'} alt="avatar"/></div>
                <p className={s.post}>{props.post}</p>
                <span className={s.likes}>likes({props.likesCount})</span>
            </div>

        </div>
    )
}