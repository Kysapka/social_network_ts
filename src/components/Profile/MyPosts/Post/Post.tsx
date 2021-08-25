import React from 'react';
import s from './Post.module.css'

type messageType = {
  id: string
  message: string
  likesCount: number
}

export const Post:React.FC<messageType> = (props) => {
  return (
        <div className={s.item}>
          <img src='https://img.icons8.com/bubbles/2x/user.png' alt='ava' />

          <div>
            <span>{props.message} </span>
            <span>Likes: {props.likesCount}</span>
          </div>

        </div>
  )
}