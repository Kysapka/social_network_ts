import React, {ChangeEvent, ChangeEventHandler, LegacyRef, RefObject } from 'react';
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import { postsDataType } from '../../../redux/store';


type propsType = {
    posts: postsDataType
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
export const MyPosts = (props: propsType) => {

    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)

    }

    const addPost = () => {
        props.addPost()
        props.updateNewPostText('')
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