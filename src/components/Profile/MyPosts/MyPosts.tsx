import React, {ChangeEvent, ChangeEventHandler, LegacyRef, RefObject } from 'react';
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {ActionTypes, postsDataType} from '../../../redux/store';
import {addPostAC, updateNewPostTextAC } from '../../../redux/ProfileReducer';


type propsType = {
    posts: postsDataType
    newPostText: string
    dispatch: (action: ActionTypes) => void
}
export const MyPosts = (props: propsType) => {

    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))


    }

    const addPost = () => {
        props.dispatch(addPostAC())
        props.dispatch(updateNewPostTextAC(''))
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}