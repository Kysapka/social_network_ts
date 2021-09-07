import React, {ChangeEvent, ChangeEventHandler, LegacyRef, RefObject } from 'react';
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {addPostAC, postsDataType, ProfileReducerActionTypes, updateNewPostTextAC } from '../../../redux/ProfileReducer';
import {Button, Input, TextField } from '@material-ui/core';

type propsType = {
    posts: postsDataType
    newPostText: string
    addPost: () => void
    onChangeHandler: (value: string) => void
}
export const MyPosts = (props: propsType) => {

    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <TextField value={props.newPostText} onChange={onChangeHandler} />
                </div>
                <div>
                    <Button variant={"contained"} onClick={props.addPost}>Add Post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}