import React from 'react'
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

export function MyPosts(props: MyPostsPropsType) {
    return (
        <div className={`themeBorderPad themeBorder`}>
            <h3 className={s.heading}>My Posts</h3>
            {
                props.posts.map( p => <Post key={p.id} post={p.post} likesCount={p.likes} /> )
            }
        </div>
    )
}